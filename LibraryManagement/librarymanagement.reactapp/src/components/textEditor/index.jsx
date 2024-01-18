// components/RichTextEditor.js
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = ({ value, onChange, defaultValue }) => {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      [{ size: ["small", false, "large", "huge"] }], // Font size
      [{ font: [] }], // Font family
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
    "size",
    "font",
  ];

  return (
    <ReactQuill
      value={value}
      onChange={(content) => onChange(content)}
      modules={modules}
      formats={formats}
      defaultValue={defaultValue}
      className="h-[150px] "
    />
  );
};

export default RichTextEditor;
