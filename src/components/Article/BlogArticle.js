import { useState, useRef } from "react";
import { TextField } from "@mui/material";
import BlogSection from "../Section/BlogSection";
export default function BlogArticle() {
  const SECTION_TYPES = {
    paragraph: "paragraph",
    link: "link",
    photo: "photo",
  };
  const [sections, setSections] = useState([]);
  const [autocompleteValue, setAutocompleteValue] = useState("paragraph");
  const [selectedImage, setSelectedImage] = useState(null);
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const titleRef = useRef("");
  const sectionObj = {
    type: SECTION_TYPES[autocompleteValue],
    ...(SECTION_TYPES[autocompleteValue] === "paragraph" && {
      content: content,
    }),
    ...(SECTION_TYPES[autocompleteValue] === "link" && {
      content: content,
      link: link,
    }),
    ...(SECTION_TYPES[autocompleteValue] === "photo" && {
      photo: selectedImage,
    }),
  };
  const sendValue = (section) => {
    const newSections = [...sections, section];
    setSections(newSections);
  };
  // this is the article object that will be stored in the database
  const articleObj = {
    title: titleRef.current.value,
    date: new Date().toString(),
    section: sections,
  };
  console.log(articleObj);
  console.log(sections);

  return (
    <div className="flex flex-col items-center">
      <TextField inputRef={titleRef} placeholder="Title"></TextField>

      <BlogSection
        setContent={setContent}
        setLink={setLink}
        sendValue={sendValue}
        setAutocompleteValue={setAutocompleteValue}
        autocompleteValue={autocompleteValue}
        SECTION_TYPES={SECTION_TYPES}
        blogObject={sections}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        sectionObj={sectionObj}
        articleObj={articleObj}
      />
    </div>
  );
}
