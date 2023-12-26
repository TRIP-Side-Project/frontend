/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $wrapNodeInElement, mergeRegister } from "@lexical/utils";
import {
	$createParagraphNode,
	$createRangeSelection,
	$getSelection,
	$insertNodes,
	$isNodeSelection,
	$isRootOrShadowRoot,
	$setSelection,
	COMMAND_PRIORITY_EDITOR,
	COMMAND_PRIORITY_HIGH,
	COMMAND_PRIORITY_LOW,
	createCommand,
	DRAGOVER_COMMAND,
	DRAGSTART_COMMAND,
	DROP_COMMAND,
	LexicalCommand,
	LexicalEditor,
} from "lexical";
import { useEffect, useRef, useState } from "react";

// import { Box, Button, Grid, TextField } from "@mui/material";

import { CAN_USE_DOM } from "../utils/canUseDom";

import {
	ImageNode,
	$createImageNode,
	$isImageNode,
	ImagePayload,
} from "../\bCustomNode/ImageNode";
// import axios from "axios";

//타입 추가
export type InsertImagePayload = Readonly<ImagePayload>;

const getDOMSelection = (targetWindow: Window | null): Selection | null =>
	CAN_USE_DOM ? (targetWindow || window).getSelection() : null;

// eslint-disable-next-line react-refresh/only-export-components
export const INSERT_IMAGE_COMMAND: LexicalCommand<ImagePayload> = createCommand(
	"INSERT_IMAGE_COMMAND",
);

export function InsertImageUploadedDialogBody({
	activeEditor,
	onClose,
}: {
	activeEditor: LexicalEditor;
	onClose: () => void;
}) {
	const hasModifier = useRef(false);

	const [src, setSrc] = useState("");
	const [altText, setAltText] = useState("");
	const [showCaption, setShowCaption] = useState(false);
	const [formData, setFormData] = useState<FormData | null>(null);

	const isDisabled = src === "";

	const handleShowCaptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setShowCaption(e.target.checked);
	};

	const loadImage = (files: FileList | Blob[] | null) => {
		if (files && files.length > 0) {
			const reader = new FileReader();
			reader.onload = function () {
				if (typeof reader.result === "string") {
					setSrc(reader.result);

					//새로운 formData 객체 생성
					const newFormData = new FormData();
					newFormData.append("imageFile", files[0]);
					setFormData(newFormData);
					console.log(formData);
				}
			};
			reader.readAsDataURL(files[0]);
		}
		// const reader = new FileReader();
		// reader.onload = function () {
		// 	if (typeof reader.result === "string") {
		// 		setSrc(reader.result);

		// 	}
		// 	return "";
		// };
		// if (files !== null) {
		// 	reader.readAsDataURL(files[0]);
		// }
	};

	useEffect(() => {
		hasModifier.current = false;
		const handler = (e: KeyboardEvent) => {
			hasModifier.current = e.altKey;
		};
		document.addEventListener("keydown", handler);
		return () => {
			document.removeEventListener("keydown", handler);
		};
	}, [activeEditor]);

	//handleOnClick으로 서버에 이미지 전달 후 응답으로 url
	// const BASE_URL = import.meta.env.VITE_BASE_URL;
	// const ACCESS_TOKEN = window.localStorage.getItem("access-token");
	const handleOnClick = async () => {
		try {
			// 	const response = await axios.post(
			// 		`${BASE_URL}/api/article-files`,
			// 		formData,
			// 		{
			// 			headers: {
			// 				"Content-Type": "multipart/form-data",
			// 				accessToken: `Bearer ${ACCESS_TOKEN}`,
			// 			},
			// 		},
			// 	);
			// 	console.log(response.data);

			// const payload = { altText, src: response.data, showCaption };
			// activeEditor.dispatchCommand(INSERT_IMAGE_COMMAND, payload);
			const payload = { altText, src, showCaption };
			activeEditor.dispatchCommand(INSERT_IMAGE_COMMAND, payload);
			onClose();
		} catch (err) {
			console.log(`이미지 서버 전달 부분 에러 ${err}`);
		}

		// onClose();
	};

	return (
		<>
			{/* fullWidth sx={{ mb: 1 }} variant="contained" component="label" */}
			<div className="flex flex-row items-center p-2 ">
				<div className="mr-4 ">파일 선택</div>
				<div className="p-1 border-2 rounded-lg border-LIGHT_GRAY_COLOR">
					{/* <div className="px-3 py-1 rounded-lg bg-LINE_POINT_COLOR">Upload</div> */}
					<input
						className="flex p-1 flex-2"
						type="file"
						onChange={(e) => loadImage(e.target.files)}
						hidden
						accept="image/*"
					/>
				</div>
			</div>
			<div className="flex flex-row items-center p-2 ">
				<div className="mr-4 ">대체 글자</div>
				<div className="flex-1 p-2 border-2 rounded-lg border-LIGHT_GRAY_COLOR">
					<input
						// label="Alt Text"
						type="textarea"
						placeholder="대체 텍스트 작성"
						onChange={(e) => setAltText(e.target.value)}
						value={altText}
						// sx={{ mb: 7, height: 10 }}
						// fullWidth
						// variant="standard"
						// data-test-id="image-modal-alt-text-input"
					/>
				</div>
			</div>

			<div className="p-2 Input__wrapper">
				<input
					id="caption"
					type="checkbox"
					checked={showCaption}
					onChange={handleShowCaptionChange}
				/>
				<label htmlFor="caption" className="ml-2">
					Show Caption
				</label>
			</div>

			<div className="flex justify-end">
				<button
					className="px-5 py-1 rounded-lg bg-LINE_POINT_COLOR"
					// data-test-id="image-modal-confirm-btn"
					disabled={isDisabled}
					onClick={() => handleOnClick()}
					// variant="outlined"
				>
					확인
				</button>
			</div>
		</>
	);
}

//*********************************************** 파일 업로드 하는 부분 ************************************ *//

export function InsertImageDialog({
	activeEditor,
}: {
	activeEditor: LexicalEditor;
}): JSX.Element {
	const [mode, setMode] = useState<null | string>(null);
	const hasModifier = useRef(false);

	useEffect(() => {
		hasModifier.current = false;
		const handler = (e: KeyboardEvent) => {
			hasModifier.current = e.altKey;
		};
		document.addEventListener("keydown", handler);
		return () => {
			document.removeEventListener("keydown", handler);
		};
	}, [activeEditor]);

	//handleOnClick?
	// const handleOnClick = () => {
	// 	const payload = {altText, src, showCaption, position}
	// 	activeEditor.dispatchCommand(INSERT_INLINE_IMAGE_COMMAND, payload)
	// 	onClose()
	//   }
	// const onClick = (payload: any) => {
	// 	activeEditor.dispatchCommand(INSERT_IMAGE_COMMAND, payload);
	// 	onClose();
	// };
	//여기는 그냥 무조건 바로 파일 열리게 해야 함
	return (
		<>
			{!mode && (
				<div className="p-3 bg-yellow-300 border-2">
					{/* <button
						className="p-3 border-2"
						data-test-id="image-modal-option-url"
						onClick={() => setMode("url")}
					>
						URL
					</button> */}
					<button
						className="p-3 border-2"
						data-test-id="image-modal-option-file"
						onClick={() => setMode("file")}
					>
						File
					</button>
				</div>
			)}
			{/* {mode === "url" && <InsertImageUriDialogBody onClick={onClick} />} */}
			{/* {mode === "file" && <InsertImageUploadedDialogBody onClick={onClick} />} */}
		</>
	);
}

export default function ImagesPlugin({
	captionsEnabled,
}: {
	captionsEnabled?: boolean;
}): JSX.Element | null {
	const [editor] = useLexicalComposerContext();

	useEffect(() => {
		if (!editor.hasNodes([ImageNode])) {
			throw new Error("ImagesPlugin: ImageNode not registered on editor");
		}

		return mergeRegister(
			editor.registerCommand<InsertImagePayload>(
				INSERT_IMAGE_COMMAND,
				(payload) => {
					const imageNode = $createImageNode(payload);
					$insertNodes([imageNode]);
					if ($isRootOrShadowRoot(imageNode.getParentOrThrow())) {
						$wrapNodeInElement(imageNode, $createParagraphNode).selectEnd();
					}

					return true;
				},
				COMMAND_PRIORITY_EDITOR,
			),
			editor.registerCommand<DragEvent>(
				DRAGSTART_COMMAND,
				(event) => {
					return onDragStart(event);
				},
				COMMAND_PRIORITY_HIGH,
			),
			editor.registerCommand<DragEvent>(
				DRAGOVER_COMMAND,
				(event) => {
					return onDragover(event);
				},
				COMMAND_PRIORITY_LOW,
			),
			editor.registerCommand<DragEvent>(
				DROP_COMMAND,
				(event) => {
					return onDrop(event, editor);
				},
				COMMAND_PRIORITY_HIGH,
			),
		);
	}, [captionsEnabled, editor]);

	return null;
}

const TRANSPARENT_IMAGE =
	"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
const img = document.createElement("img");
img.src = TRANSPARENT_IMAGE;

function onDragStart(event: DragEvent): boolean {
	const node = getImageNodeInSelection();
	if (!node) {
		return false;
	}
	const dataTransfer = event.dataTransfer;
	if (!dataTransfer) {
		return false;
	}
	dataTransfer.setData("text/plain", "_");
	dataTransfer.setDragImage(img, 0, 0);
	dataTransfer.setData(
		"application/x-lexical-drag",
		JSON.stringify({
			data: {
				altText: node.__altText,
				caption: node.__caption,
				height: node.__height,
				key: node.getKey(),
				maxWidth: node.__maxWidth,
				showCaption: node.__showCaption,
				src: node.__src,
				width: node.__width,
			},
			type: "image",
		}),
	);

	return true;
}

function onDragover(event: DragEvent): boolean {
	const node = getImageNodeInSelection();
	if (!node) {
		return false;
	}
	if (!canDropImage(event)) {
		event.preventDefault();
	}
	return true;
}

function onDrop(event: DragEvent, editor: LexicalEditor): boolean {
	const node = getImageNodeInSelection();
	if (!node) {
		return false;
	}
	const data = getDragImageData(event);
	if (!data) {
		return false;
	}
	event.preventDefault();
	if (canDropImage(event)) {
		const range = getDragSelection(event);
		node.remove();
		const rangeSelection = $createRangeSelection();
		if (range !== null && range !== undefined) {
			rangeSelection.applyDOMRange(range);
		}
		$setSelection(rangeSelection);
		editor.dispatchCommand(INSERT_IMAGE_COMMAND, data);
	}
	return true;
}

function getImageNodeInSelection(): ImageNode | null {
	const selection = $getSelection();
	if (!$isNodeSelection(selection)) {
		return null;
	}
	const nodes = selection.getNodes();
	const node = nodes[0];
	return $isImageNode(node) ? node : null;
}

function getDragImageData(event: DragEvent): null | InsertImagePayload {
	const dragData = event.dataTransfer?.getData("application/x-lexical-drag");
	if (!dragData) {
		return null;
	}
	const { type, data } = JSON.parse(dragData);
	if (type !== "image") {
		return null;
	}

	return data;
}

function canDropImage(event: DragEvent) {
	const target = event.target;
	return !!(
		target &&
		target instanceof HTMLElement &&
		!target.closest("code, span.editor-image") &&
		target.parentElement &&
		target.parentElement.closest("div.ContentEditable__root")
	);
}

declare global {
	interface DragEvent {
		rangeOffset?: number;
		rangeParent?: Node;
	}
}

function getDragSelection(event: DragEvent): Range | null | undefined {
	let range;
	const target = event.target as null | Element | Document;
	const targetWindow =
		target == null
			? null
			: target.nodeType === 9
			  ? (target as Document).defaultView
			  : (target as Element).ownerDocument.defaultView;
	const domSelection = getDOMSelection(targetWindow);
	if (document.caretRangeFromPoint) {
		range = document.caretRangeFromPoint(event.clientX, event.clientY);
	} else if (event.rangeParent && domSelection !== null) {
		domSelection.collapse(event.rangeParent, event.rangeOffset || 0);
		range = domSelection.getRangeAt(0);
	} else {
		throw Error(`Cannot get the selection when dragging`);
	}

	return range;
}
