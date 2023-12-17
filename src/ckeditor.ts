/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";

import { Bold, Italic } from "@ckeditor/ckeditor5-basic-styles";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Autoformat } from "@ckeditor/ckeditor5-autoformat";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { List } from "@ckeditor/ckeditor5-list";
import { Link } from "@ckeditor/ckeditor5-link";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import {
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	PictureEditing,
	ImageResizeEditing,
	ImageResizeHandles,
} from "@ckeditor/ckeditor5-image";
//import { Alignment } from "@ckeditor/ckeditor5-alignment";
// import {
// 	PluginConstructor,
// 	Editor,
// 	EditorConfig,
// } from "@ckeditor/ckeditor5-core";

class EmEditor extends ClassicEditor {}

ClassicEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	Bold,
	Italic,
	Heading,
	List,
	Link,
	Paragraph,
	BlockQuote,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	PictureEditing,
	ImageResizeEditing,
	ImageResizeHandles,
];

ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			"heading",
			"|",
			"bold",
			"italic",
			"|",
			"link",
			"bulletedList",
			"numberedList",
			"blockQuote",
			"|",
			"imageUpload",
			"mediaEmbed",
			"|",
			"undo",
			"redo",
		],
	},
	language: "ko",
	image: {
		toolbar: [
			"imageTextAlternative",
			"toggleImageCaption",
			"imageStyle:inline",
			"imageStyle:block",
			"imageStyle:side",
		],
	},
};

// public static override builtinPlugins: PluginConstructor<Editor>[] = [

// 	];

// public static override defaultConfig?: EditorConfig = {

// };
export default EmEditor;
