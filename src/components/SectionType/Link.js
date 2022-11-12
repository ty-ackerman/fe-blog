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
  const handleSetLink = (e) => {
    const newSetLink = e.target.value;
    setLink(newSetLink);
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
        onChange={handleSetLink}
        placeholder="Link"
      ></TextField>

      {/* )} */}
    </div>
  );
}
