import React from "react";
import { TextField } from "@mui/material";
export default function Paragraph({ autocompleteValue, content, setContent }) {
  return (
    <div>
      {autocompleteValue === "paragraph" && (
        <TextField
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Paragraph"
        ></TextField>
      )}
    </div>
  );
}
