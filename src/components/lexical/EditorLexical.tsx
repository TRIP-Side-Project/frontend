/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

import tripTheme from "@/components/lexical/themes/Theme";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";

import ToolbarPlugin from "./plugins/ToolbarPlugin";
import "./lexical.css";
import AutoLinkPlugin from "./plugins/AutoLinkPlugins";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import ImagesPlugin from "./plugins/ImagePlugin";
import { ImageNode } from "./\bCustomNode/ImageNode";
// import ReadLexical from "./ReadLexical";
import { EditorState } from "lexical";
import { ReadOnlyContentEditable } from "./ReadLexical";

const editorConfig = {
	namespace: "TRIP EDITOR",
	//editor theme
	theme: tripTheme,

	//handling error
	onError(error: any) {
		throw new Error(`에디터 에러 ${error}`);
	},

	//custom node
	nodes: [
		HeadingNode,
		ListNode,
		ListItemNode,
		QuoteNode,
		CodeNode,
		CodeHighlightNode,
		TableNode,
		TableCellNode,
		TableRowNode,
		AutoLinkNode,
		LinkNode,
		ImageNode,
	],
};

const MyCustomAutoFocusPlugin = () => {
	const [editor] = useLexicalComposerContext();

	useEffect(() => {
		//에디터에 첫 로드시 포커싱 주기 필요 없음 - 추후 제거 예쩡
		editor.focus();
	}, [editor]);

	return null;
};

export function OnChangePlugin({ onChange }: any) {
	const [editor] = useLexicalComposerContext();
	useEffect(() => {
		return editor.registerUpdateListener(({ editorState }) => {
			onChange(editorState);
		});
	}, [editor, onChange]);
	return null;
}

interface LexicalTypes {
	handleEditorData: (data: string) => void;
	editData?: string;
	isEdit?: boolean;
}

const EditorLexical = ({
	handleEditorData,
	editData,
	isEdit,
}: LexicalTypes) => {
	const onChange = (editorState: EditorState) => {
		const editorStateJSON = editorState.toJSON();
		handleEditorData(JSON.stringify(editorStateJSON));
	};

	//console.log(editData);

	// const applyServerData = () => {
	// 	try {
	// 		const parsedData = JSON.parse(editData as string);
	// 		const newEditorState = editor.parseEditorState(
	// 			JSON.stringify(parsedData),
	// 		);

	// 		editor.setEditorState(newEditorState);
	// 	} catch (err) {
	// 		console.log(`에디터 수정 등록 에러 : ${err}`);
	// 	}
	// };

	// if (editData) {
	// 	applyServerData();
	// }

	// useEffect(() => {
	// 	if (editData) {
	// 		console.log("수정 모두로 변경 ");
	// 	}
	// }, [editData]);

	return (
		<div className="w-full">
			<section className="">
				<LexicalComposer initialConfig={editorConfig}>
					<div className="editor-container">
						<ToolbarPlugin />
						<div className="editor-inner">
							<RichTextPlugin
								contentEditable={
									editData ? (
										<ReadOnlyContentEditable
											initialContent={editData}
											isEdit={isEdit}
										/>
									) : (
										<ContentEditable className="editor-input" />
									)
								}
								placeholder={
									<div className="editor-placeholder">글을 작성 해주세요..</div>
								}
								ErrorBoundary={LexicalErrorBoundary}
							/>
							<OnChangePlugin onChange={onChange} />
							<HistoryPlugin />
							<AutoLinkPlugin />
							<ListPlugin />
							<LinkPlugin />
							<ImagesPlugin />
							<MyCustomAutoFocusPlugin />
						</div>
					</div>
				</LexicalComposer>
			</section>
		</div>
	);
};

export default EditorLexical;
