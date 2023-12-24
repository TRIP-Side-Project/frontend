/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import "./ImageNode.css";

// import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
// import { useCollaborationContext } from "@lexical/react/LexicalCollaborationContext";
// import { CollaborationPlugin } from "@lexical/react/LexicalCollaborationPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
// import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
// import { HashtagPlugin } from "@lexical/react/LexicalHashtagPlugin";
// import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
// import { LexicalNestedComposer } from "@lexical/react/LexicalNestedComposer";
// import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { useLexicalNodeSelection } from "@lexical/react/useLexicalNodeSelection";
import { mergeRegister } from "@lexical/utils";
import {
	$getNodeByKey,
	$getSelection,
	$isNodeSelection,
	$setSelection,
	CLICK_COMMAND,
	COMMAND_PRIORITY_LOW,
	DRAGSTART_COMMAND,
	GridSelection,
	KEY_BACKSPACE_COMMAND,
	KEY_DELETE_COMMAND,
	KEY_ENTER_COMMAND,
	KEY_ESCAPE_COMMAND,
	LexicalEditor,
	NodeKey,
	NodeSelection,
	RangeSelection,
	SELECTION_CHANGE_COMMAND,
} from "lexical";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";

// import ImageResizer from "../../ui/ImageResizer";
import { $isImageNode } from ".";
import ImageResizer from "@/components/lexical/ui/ImageResizer";

const imageCache = new Set();

function useSuspenseImage(src: string) {
	if (!imageCache.has(src)) {
		throw new Promise((resolve) => {
			const img = new Image();
			img.src = src;
			img.onload = () => {
				imageCache.add(src);
				resolve(null);
			};
		});
	}
}

function LazyImage({
	altText,
	className,
	imageRef,
	src,
	width,
	height,
	maxWidth,
}: {
	altText: string;
	className: string | null;
	imageRef: { current: null | HTMLImageElement };
	src: string;
	width: "inherit" | number;
	height: "inherit" | number;
	maxWidth: number;
}): JSX.Element {
	useSuspenseImage(src);
	return (
		<img
			className={className || undefined}
			src={src}
			alt={altText}
			ref={imageRef}
			style={{
				height,
				maxWidth,
				width,
			}}
			draggable="false"
		/>
	);
}

export default function ImageComponent({
	src,
	altText,
	nodeKey,
	width,
	height,
	maxWidth,
	resizable,
	showCaption,
	caption,
	captionsEnabled,
}: {
	src: string;
	altText: string;
	nodeKey: NodeKey;
	width: number | "inherit";
	height: number | "inherit";
	maxWidth: number;
	resizable: any;
	showCaption: boolean;
	caption: LexicalEditor;
	captionsEnabled: any;
}): JSX.Element {
	const imageRef = useRef<null | HTMLImageElement>(null);
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const [isSelected, setSelected, clearSelection] =
		useLexicalNodeSelection(nodeKey);
	const [, setIsResizing] = useState(false);
	// const { isCollabActive } = useCollaborationContext();
	const [editor] = useLexicalComposerContext();
	const [selection, setSelection] = useState<
		RangeSelection | NodeSelection | GridSelection | null
	>(null);
	const activeEditorRef = useRef<LexicalEditor | null>(null);

	const onDelete = useCallback(
		(payload: KeyboardEvent) => {
			if (isSelected && $isNodeSelection($getSelection())) {
				const event: KeyboardEvent = payload;
				event.preventDefault();
				const node = $getNodeByKey(nodeKey);
				if ($isImageNode(node)) {
					node?.remove();
				}

				setSelected(false);
			}
			return false;
		},
		[isSelected, nodeKey, setSelected],
	);

	const onEnter = useCallback(
		(event: KeyboardEvent) => {
			const latestSelection = $getSelection();
			const buttonElem = buttonRef.current;
			if (
				isSelected &&
				$isNodeSelection(latestSelection) &&
				latestSelection.getNodes().length === 1
			) {
				if (showCaption) {
					// Move focus into nested editor
					$setSelection(null);
					event.preventDefault();
					caption.focus();
					return true;
				} else if (
					buttonElem !== null &&
					buttonElem !== document.activeElement
				) {
					event.preventDefault();
					buttonElem.focus();
					return true;
				}
			}
			return false;
		},
		[caption, isSelected, showCaption],
	);

	const onEscape = useCallback(
		(event: KeyboardEvent) => {
			if (
				activeEditorRef.current === caption ||
				buttonRef.current === event.target
			) {
				$setSelection(null);
				editor.update(() => {
					setSelected(true);
					const parentRootElement = editor.getRootElement();
					if (parentRootElement !== null) {
						parentRootElement.focus();
					}
				});
				return true;
			}
			return false;
		},
		[caption, editor, setSelected],
	);

	useEffect(() => {
		let isMounted = true;
		const unregister = mergeRegister(
			editor.registerUpdateListener(({ editorState }) => {
				if (isMounted) {
					setSelection(
						editorState.read(() => $getSelection()) as
							| RangeSelection
							| NodeSelection
							| GridSelection
							| null,
					);
				}
			}),
			editor.registerCommand(
				SELECTION_CHANGE_COMMAND,
				(_, activeEditor) => {
					activeEditorRef.current = activeEditor;
					return false;
				},
				COMMAND_PRIORITY_LOW,
			),
			editor.registerCommand(
				CLICK_COMMAND,
				(payload) => {
					const event = payload;

					// if (isResizing) {
					// 	return true;
					// }
					if (event.target === imageRef.current) {
						if (event.shiftKey) {
							setSelected(!isSelected);
						} else {
							clearSelection();
							setSelected(true);
						}
						return true;
					}

					return false;
				},
				COMMAND_PRIORITY_LOW,
			),
			editor.registerCommand(
				DRAGSTART_COMMAND,
				(event) => {
					if (event.target === imageRef.current) {
						// TODO This is just a temporary workaround for FF to behave like other browsers.
						// Ideally, this handles drag & drop too (and all browsers).
						event.preventDefault();
						return true;
					}
					return false;
				},
				COMMAND_PRIORITY_LOW,
			),
			editor.registerCommand(
				KEY_DELETE_COMMAND,
				onDelete,
				COMMAND_PRIORITY_LOW,
			),
			editor.registerCommand(
				KEY_BACKSPACE_COMMAND,
				onDelete,
				COMMAND_PRIORITY_LOW,
			),
			editor.registerCommand(KEY_ENTER_COMMAND, onEnter, COMMAND_PRIORITY_LOW),
			editor.registerCommand(
				KEY_ESCAPE_COMMAND,
				onEscape,
				COMMAND_PRIORITY_LOW,
			),
		);
		return () => {
			isMounted = false;
			unregister();
		};
	}, [
		clearSelection,
		editor,
		// isResizing,
		isSelected,
		nodeKey,
		onDelete,
		onEnter,
		onEscape,
		setSelected,
	]);

	const setShowCaption = () => {
		editor.update(() => {
			const node = $getNodeByKey(nodeKey);
			if ($isImageNode(node)) {
				node.setShowCaption(true);
			}
		});
	};

	const onResizeEnd = (nextWidth: number, nextHeight: number) => {
		// Delay hiding the resize bars for click case
		setTimeout(() => {
			setIsResizing(false);
		}, 200);

		editor.update(() => {
			const node = $getNodeByKey(nodeKey);
			if ($isImageNode(node)) {
				node.setWidthAndHeight(nextWidth, nextHeight);
			}
		});
	};

	const onResizeStart = () => {
		setIsResizing(true);
	};

	const draggable = isSelected && $isNodeSelection(selection);
	//&& !isResizing;
	const isFocused = isSelected;
	//|| isResizing;
	return (
		<Suspense fallback={null}>
			<>
				<div draggable={draggable}>
					<LazyImage
						className={
							isFocused
								? `focused ${$isNodeSelection(selection) ? "draggable" : ""}`
								: null
						}
						src={src}
						altText={altText}
						imageRef={imageRef}
						width={width}
						height={height}
						maxWidth={maxWidth}
					/>
				</div>

				{resizable && $isNodeSelection(selection) && isFocused && (
					<ImageResizer
						showCaption={showCaption}
						setShowCaption={setShowCaption}
						editor={editor}
						buttonRef={buttonRef}
						imageRef={imageRef}
						maxWidth={maxWidth}
						onResizeStart={onResizeStart}
						onResizeEnd={onResizeEnd}
						captionsEnabled={captionsEnabled}
					/>
				)}
			</>
		</Suspense>
	);
}
