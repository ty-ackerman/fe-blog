import { Button, TextField } from "@mui/material";
import { React } from "react";
import BlogSectionRender from "./BlogSectionRender";
import BlogSectionDropDown from "./BlogSectionDropDown";
import UploadAndDisplayImage from "../UploadandDisplayImage";
export default function BlogSection({
  sendValue,
  contentRef,
  linkRef,
  setAutocompleteValue,
  SECTION_TYPES,
  blogObject,
  autocompleteValue,
  selectedImage,
  setSelectedImage,
}) {
  return (
    <div className="flex flex-col items-center">
      <BlogSectionDropDown
        SECTION_TYPES={SECTION_TYPES}
        setAutocompleteValue={setAutocompleteValue}
      />
      {autocompleteValue === "paragraph" && (
        <TextField inputRef={contentRef} placeholder="Paragraph"></TextField>
      )}
      {autocompleteValue === "link" && (
        <>
          <TextField
            inputRef={contentRef}
            placeholder="Link Description"
          ></TextField>
          <TextField inputRef={linkRef} placeholder="Link"></TextField>
        </>
      )}
      {autocompleteValue === "photo" && (
        <UploadAndDisplayImage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
      <Button onClick={sendValue}>Submit</Button>
      <BlogSectionRender blogObject={blogObject} />
    </div>
  );
}
