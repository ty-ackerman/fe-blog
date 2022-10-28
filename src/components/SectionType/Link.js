import React from "react";
import { TextField, Button } from "@mui/material";
export default function Link({
  autocompleteValue,
  content,
  setContent,
  link,
  setLink,
  handleSubmit,
  sectionObj,
  sendValue,
  linkObj,
}) {
  const linkSubmit = () => {
    sendValue({ ...linkObj, id: Math.random() });
    setLink("");
  };
  return (
    <div>
      {/* {autocompleteValue === "link" && ( */}

      <TextField
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Link Description"
      ></TextField>
      <TextField
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Link"
      ></TextField>
      <Button
        onClick={() => {
          linkSubmit(linkObj);
        }}
      >
        Add Link
      </Button>

      {/* )} */}
    </div>
  );
}
