/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
	$applyNodeReplacement,
	createEditor,
	DecoratorNode,
	DOMConversionMap,
	DOMConversionOutput,
	EditorConfig,
	LexicalEditor,
	LexicalNode,
	NodeKey,
	SerializedEditor,
	SerializedLexicalNode,
	Spread,
} from "lexical";
// import { Position } from "postcss";
import React, { Suspense } from "react";

const ImageComponent = React.lazy(
	// @ts-ignore
	() => import("./ImageComponent"),
);

export interface ImagePayload {
	altText: string;
	caption?: LexicalEditor;
	maxWidth?: number;
	captionsEnabled?: any;
	height?: "inherit" | number;
	key?: NodeKey;
	showCaption?: boolean;
	src: string;
	width?: "inherit" | number;
}

export interface UpdateInlineImagePayload {
	altText?: string;
	showCaption?: boolean;
}

function convertImageElement(domNode: Node): null | DOMConversionOutput {
	if (domNode instanceof HTMLImageElement) {
		const { alt: altText, src, width, height } = domNode;
		const node = $createImageNode({ altText, height, src, width });
		return { node };
	}

	return null;
}

export type SerializedImageNode = Spread<
	{
		altText: string;
		caption: SerializedEditor;
		height?: "inherit" | number;
		showCaption: boolean;
		src: string;
		width?: "inherit" | number;
		maxWidth?: number;
		captionEnabled?: any;
	},
	SerializedLexicalNode
>;

export class ImageNode extends DecoratorNode<JSX.Element> {
	__src: string;
	__altText: string;
	__width: "inherit" | number;
	__height: "inherit" | number;
	__maxWidth: number;
	__showCaption: boolean;
	__caption: LexicalEditor;
	// Captions cannot yet be used within editor cells
	__captionsEnabled: any;

	static getType(): string {
		return "image";
	}

	static clone(node: ImageNode): ImageNode {
		return new ImageNode(
			node.__src,
			node.__altText,
			node.__maxWidth,
			node.__width,
			node.__height,
			node.__showCaption,
			node.__caption,
			node.__captionsEnabled,
			node.__key,
		);
	}

	static importJSON(serializedNode: SerializedImageNode): ImageNode {
		const { altText, height, width, maxWidth, caption, src, showCaption } =
			serializedNode;
		const node = $createImageNode({
			altText,
			height,
			maxWidth,
			showCaption,
			src,
			width,
		});
		const nestedEditor = node.__caption;
		const editorState = nestedEditor.parseEditorState(caption.editorState);
		if (!editorState.isEmpty()) {
			nestedEditor.setEditorState(editorState);
		}
		return node;
	}

	exportDOM() {
		const element = document.createElement("img");
		element.setAttribute("src", this.__src);
		element.setAttribute("alt", this.__altText);
		element.setAttribute("width", this.__width.toString());
		element.setAttribute("height", this.__height.toString());
		return { element };
	}
	//원래 node 하지만 현재 사용하지 않아서 임시로 _node 처리
	static importDOM(): DOMConversionMap | null {
		return {
			img: (_node: Node) => ({
				conversion: convertImageElement,
				priority: 0,
			}),
		};
	}

	constructor(
		src: string,
		altText: string,
		maxWidth: number,
		width?: "inherit" | number,
		height?: "inherit" | number,
		showCaption?: boolean,
		caption?: LexicalEditor,
		captionsEnabled?: any,
		key?: NodeKey,
	) {
		super(key);
		this.__src = src;
		this.__altText = altText;
		this.__maxWidth = maxWidth;
		this.__width = width || "inherit";
		this.__height = height || "inherit";
		this.__showCaption = showCaption || false;
		this.__caption = caption || createEditor();
		this.__captionsEnabled = captionsEnabled || captionsEnabled === undefined;
	}

	exportJSON(): SerializedImageNode {
		return {
			altText: this.getAltText(),
			caption: this.__caption.toJSON(),
			height: this.__height === "inherit" ? 0 : this.__height,
			maxWidth: this.__maxWidth,
			showCaption: this.__showCaption,
			src: this.getSrc(),
			type: "image",
			version: 1,
			width: this.__width === "inherit" ? 0 : this.__width,
		};
	}

	setWidthAndHeight(width: number, height: number) {
		const writable = this.getWritable();
		writable.__width = width;
		writable.__height = height;
	}

	setShowCaption(showCaption: boolean): void {
		const writable = this.getWritable();
		writable.__showCaption = showCaption;
	}

	// View

	createDOM(config: EditorConfig): HTMLElement {
		const span = document.createElement("span");
		const theme = config.theme;
		const className = theme.image;
		if (className !== undefined) {
			span.className = className;
		}
		return span;
	}

	updateDOM() {
		return false;
	}

	getSrc() {
		return this.__src;
	}

	getAltText() {
		return this.__altText;
	}

	decorate(): JSX.Element {
		return (
			<Suspense fallback={null}>
				<ImageComponent
					src={this.__src}
					altText={this.__altText}
					width={this.__width}
					height={this.__height}
					maxWidth={this.__maxWidth}
					nodeKey={this.getKey()}
					showCaption={this.__showCaption}
					caption={this.__caption}
					captionsEnabled={this.__captionsEnabled}
					// resizable={true}
				/>
			</Suspense>
		);
	}
}

export function $createImageNode({
	altText,
	height,
	maxWidth = 500,
	captionsEnabled,
	src,
	width,
	showCaption,
	caption,
	key,
}: ImagePayload): ImageNode {
	return $applyNodeReplacement(
		new ImageNode(
			src,
			altText,
			maxWidth,
			width,
			height,
			showCaption,
			caption,
			captionsEnabled,
			key,
		),
	);
}

export function $isImageNode(
	node: LexicalNode | null | undefined,
): node is ImageNode {
	return node instanceof ImageNode;
}
