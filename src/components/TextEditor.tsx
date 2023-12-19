import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import EmEditor from "@/ckeditor";

interface HandleEditor {
	handleEditorData: (data: string) => void;
}

const TextEditor = ( {handleEditorData}: HandleEditor) => {
	return (
		<div className="bg-yellow-300">
			<section>
				<CKEditor
					editor={ClassicEditor}
					data="<p>여기에 입력 해주세요.</p>"
					onReady={(editor) => {
						console.log("Editor is ready to use", editor);
						// console.log(Array.from(editor.ui.componentFactory.names()));
					}}
					onChange={(event, editor) => {
						const data = editor.getData();
						handleEditorData(data);
						console.log(event, editor, data);
					}}
					
				/>
			</section>
		</div>
	);
};

export default TextEditor;
