import { Button, TextField } from "@mui/material";
import { React } from "react";

import BlogSectionDropDown from "./BlogSectionDropDown";
import UploadAndDisplayImage from "../UploadandDisplayImage";
export default function BlogSection({
  sendValue,
  setContent,
  setLink,
  setAutocompleteValue,
  SECTION_TYPES,

  autocompleteValue,
  selectedImage,
  setSelectedImage,
  sectionObj,

  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <BlogSectionDropDown
        SECTION_TYPES={SECTION_TYPES}
        setAutocompleteValue={setAutocompleteValue}
      />
      {autocompleteValue === "paragraph" && (
        <TextField
          onChange={(e) => setContent(e.target.value)}
          placeholder="Paragraph"
        ></TextField>
      )}
      {autocompleteValue === "link" && (
        <>
          <TextField
            onChange={(e) => setContent(e.target.value)}
            placeholder="Link Description"
          ></TextField>
          <TextField
            onChange={(e) => setLink(e.target.value)}
            placeholder="Link"
          ></TextField>
        </>
      )}
      {autocompleteValue === "photo" && (
        <UploadAndDisplayImage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
      <Button onClick={() => sendValue(sectionObj)}>Submit</Button>
    </form>
  );
}
