import React, { useRef } from "react";

export default function FileUploader({
  onFileSelectError,
  onFileSelectSuccess,
}) {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file.size > 1024000)
      onFileSelectError({ error: "File size cannot exceed more than 1MB" });
    else onFileSelectSuccess(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileInput}></input>
      <button
        onClick={(e) => fileInput.current && fileInput.current.click()}
        className="btn btn-primary"
      ></button>
    </div>
  );
}
