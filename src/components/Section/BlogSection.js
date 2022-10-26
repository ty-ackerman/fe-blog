import { Button, TextField } from "@mui/material";
import { React } from "react";
import BlogSectionRender from "./BlogSectionRender";
import BlogSectionDropDown from "./BlogSectionDropDown";
import UploadAndDisplayImage from "../UploadandDisplayImage";
export default function BlogSection({
  sendValue,
  setContent,
  setLink,
  setAutocompleteValue,
  SECTION_TYPES,
  blogObject,
  autocompleteValue,
  selectedImage,
  setSelectedImage,
  sectionObj,
  articleObj,
}) {
  return (
    <div className="flex flex-col items-center">
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
      <BlogSectionRender blogObject={blogObject} articleObj={articleObj} />
    </div>
  );
}
