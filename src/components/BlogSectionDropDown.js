import React from "react";
import { Autocomplete, TextField } from "@mui/material";
export default function BlogSectionDropDown({ SECTION_TYPES }) {
  return (
    <div>
      <Autocomplete
        sx={{ width: 300 }}
        options={Object.keys(SECTION_TYPES)}
        renderInput={(params) => <TextField {...params} label="Section Type" />}
      />
    </div>
  );
}
