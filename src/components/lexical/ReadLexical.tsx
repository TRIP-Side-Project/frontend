/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import tripTheme from "./themes/Theme";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { ImageNode } from "./\bCustomNode/ImageNode";
import { ListItemNode, ListNode } from "@lexical/list";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LexicalComposer } from "@lexical/react/LexicalComposer";

import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useCallback } from "react";

const readConfig = {
	namespace: "redConfig",
	theme: tripTheme,
	onError(error: Error) {
		throw new Error(`에디터 에러 ${error}`);
	},
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
	readOnly: true,
	editable: false,
};

// export type Props = {
// 	id?: string;
// };

export function ReadOnlyContentEditable(props: any): JSX.Element {
	const isEdit = props.isEdit;
	console.log("===== 리드온리 에디테이블 실행 ===Edit모드 : ", isEdit);
	// console.log(props); - iniitalContent
	const [editor] = useLexicalComposerContext();

	const ref = useCallback(
		(rootElement: null | HTMLElement) => {
			editor.setRootElement(rootElement);
		},
		[editor],
	);

	useEffect(() => {
		const applyServerData = () => {
			console.log("서버로부터 받은 데이터를 에디터에 넣기");
			//return 알맞은 형태로 서버로부터 받은 데이터를 에디터에 다시 넣어야 한다.
			try {
				const parsedData = JSON.parse(props.initialContent);
				const newEditorState = editor.parseEditorState(
					JSON.stringify(parsedData),
				);

				editor.setEditorState(newEditorState);
			} catch (error) {
				console.log("서버 데이터 파싱 중 에러 ", error);
			}
		};

		applyServerData();
	}, [editor, props.initialContent]);

	return (
		<div
			contentEditable={isEdit ? true : false}
			id={props.id}
			ref={ref}
			className="editor-input"
		/>
	);
}

type Props = {
	content: string;
};

const ReadLexical = ({ content }: Props) => {
	const [data, setData] = useState<string>();

	useEffect(() => {
		setData(content);
	}, [content]);

	return (
		<div className="flex flex-col justify-center w-full bg-green-200 h-fit ">
			<LexicalComposer initialConfig={readConfig}>
				<div className="editor-inner">
					<PlainTextPlugin
						contentEditable={
							<ReadOnlyContentEditable id="editor-id" initialContent={data} />
						}
						placeholder={null}
						ErrorBoundary={LexicalErrorBoundary}
					/>
				</div>
			</LexicalComposer>
		</div>
	);
};

export default ReadLexical;
