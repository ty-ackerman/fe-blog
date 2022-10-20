import { React, useState } from "react";
import FileUploader from "./FileUploader";

export default function FileSubmitter({ sendValue }) {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const submitForm = () => {
    sendValue();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", selectedFile);

    // axios
    //   .post(UPLOAD_URL, formData)
    //   .then((res) => {
    //     alert("File Upload success");
    //   })
    //   .catch((err) => alert("File Upload Error"));
    console.log(formData);
  };

  console.log(selectedFile);
  return (
    <div className="App">
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FileUploader
          onFileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)}
        />

        <button onClick={submitForm}>Submit</button>
      </form>
    </div>
  );
}
