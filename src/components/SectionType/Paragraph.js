import React from "react";
import { TextField, Typography, Button } from "@mui/material";

export default function Paragraph({ content, setContent }) {
  const handleChange = (event) => {
    setContent(event.target.value);
  };
  return (
    <div>
      <TextField
        // value={content}
        onChange={handleChange}
        placeholder="Paragraph"
        multiline
        rows={10}
        sx={{ width: 500 }}
      ></TextField>
    </div>
  );
}
