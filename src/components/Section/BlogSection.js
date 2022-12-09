import { Button, TextField } from "@mui/material";
import { React } from "react";
import Paragraph from "../SectionType/Paragraph";
import BlogSectionDropDown from "./BlogSectionDropDown";
import UploadAndDisplayImage from "../UploadandDisplayImage";
import Link from "../SectionType/Link";
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
  content,
  link,
  sections,
  setSections,
  linkObj,
}) {
  const handleSubmit = (e) => {
    // e.preventDefault();
    sendValue({ ...sectionObj, id: Math.random() });
    setContent("");
    setLink("");

    setSelectedImage(null);
  };

  const linkSubmit = () => {
    sendValue({ ...linkObj, id: Math.random() });
  };

  return (
    <div className="flex flex-col items-center">
      <BlogSectionDropDown
        SECTION_TYPES={SECTION_TYPES}
        setAutocompleteValue={setAutocompleteValue}
      />
      <Paragraph
        autocompleteValue={autocompleteValue}
        content={content}
        setContent={setContent}
        link={link}
        setLink={setLink}
        handleSubmit={handleSubmit}
        sectionObj={sectionObj}
        linkSubmit={linkSubmit}
        linkObj={linkObj}
        sendValue={sendValue}
      />

      {autocompleteValue === "photo" && (
        <UploadAndDisplayImage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
      <Button
        onClick={() => {
          handleSubmit(sectionObj);
        }}
      >
        Submit
      </Button>
    </div>
  );
}
