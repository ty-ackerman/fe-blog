import { Button, TextField } from "@mui/material";
import { React } from "react";
import BlogSectionRender from "./BlogSectionRender";
import BlogSectionDropDown from "./BlogSectionDropDown";

export default function BlogSection({
  sendValue,
  paragraphRef,
  setAutocompleteValue,
  SECTION_TYPES,
  blogObject,
}) {
  return (
    <div className="flex flex-col items-center">
      <BlogSectionDropDown
        SECTION_TYPES={SECTION_TYPES}
        setAutocompleteValue={setAutocompleteValue}
      />
      <TextField inputRef={paragraphRef} placeholder="Your Post"></TextField>
      <Button onClick={sendValue}>Submit</Button>
      <BlogSectionRender blogObject={blogObject} />
    </div>
  );
}
