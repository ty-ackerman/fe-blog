import React from "react";
import { TextField } from "@mui/material";

export default function Link({
  autocompleteValue,
  content,
  setContent,
  link,
  setLink,
}) {
  return (
    <div>
      {autocompleteValue === "link" && (
        <>
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
        </>
      )}
    </div>
  );
}
