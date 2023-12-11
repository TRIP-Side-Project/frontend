import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const TextEditor = () => {
	return (
		<div className="bg-yellow-300">
			<section>
				<CKEditor
					editor={ClassicEditor}
					data="<p>여기에 입력 해주세요.</p>"
					onReady={(editor) => {
						console.log("Editor is ready to use", editor);
					}}
					onChange={(event, editor) => {
						const data = editor.getData();
						console.log(event, editor, data);
					}}
				/>
			</section>
		</div>
	);
};

export default TextEditor;
