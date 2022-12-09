import { Button, TextField } from "@mui/material";
import { React, useState } from "react";
import Paragraph from "../SectionType/Paragraph";
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
  content,
  link,
  linkObj,
  handleSubmit,
}) {
  const [showComponent, setShowComponent] = useState([]);
  const [values, setValues] = useState([]);

  function handleChange(event) {
    // Get the value of the textbox
    const value = event.target.value;

    // Add the new value to the array in state
    setValues([...values, value]);
  }
  const handleButtonClick = () => {
    setShowComponent([...showComponent, <TextField onChange={handleChange} />]);
    console.log(values);
  };
  return (
    <div className="flex flex-col items-center">
      <BlogSectionDropDown
        SECTION_TYPES={SECTION_TYPES}
        setAutocompleteValue={setAutocompleteValue}
      />
      {autocompleteValue === "paragraph" && (
        <Paragraph
          autocompleteValue={autocompleteValue}
          content={content}
          setContent={setContent}
          link={link}
          setLink={setLink}
          handleSubmit={handleSubmit}
          sectionObj={sectionObj}
          linkObj={linkObj}
          sendValue={sendValue}
        />
      )}
      {autocompleteValue === "ordered list" && (
        <>
          {showComponent.map((item) => item)}
          <Button onClick={handleButtonClick}>Add More</Button>
        </>
      )}
      {autocompleteValue === "photo" && (
        <UploadAndDisplayImage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
      <p>Values: {values.join(", ")}</p>
    </div>
  );
}
