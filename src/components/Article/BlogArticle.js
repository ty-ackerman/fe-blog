import { useState, useRef, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import BlogSection from "../Section/BlogSection";
import BlogSectionRender from "../Section/BlogSectionRender";
export default function BlogArticle() {
  const SECTION_TYPES = {
    paragraph: "paragraph",
    "ordered list": "ordered list",
    photo: "photo",
  };
  const [sections, setSections] = useState([]);
  const [autocompleteValue, setAutocompleteValue] = useState("paragraph");
  const [selectedImage, setSelectedImage] = useState(null);
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const titleRef = useRef("");
  const descriptionRef = useRef("");
  const [showArticleComponent, setShowArticleComponent] = useState([]);
  const [paragraphContent, setParagraphContent] = useState(content);
  const handleParagraphChange = (event) => {
    setParagraphContent(event.target.value);
  };
  const handleNewComponentOnClick = () => {
    setShowArticleComponent([
      ...showArticleComponent,
      <BlogSection
        key={showArticleComponent.length}
        setContent={setContent}
        setLink={setLink}
        sendValue={sendValue}
        setAutocompleteValue={setAutocompleteValue}
        autocompleteValue={autocompleteValue}
        SECTION_TYPES={SECTION_TYPES}
        sectionObj={sectionObj}
        content={content}
        sections={sections}
        setSections={setSections}
        handleSubmit={handleSubmit}
        paragraphContent={paragraphContent}
        handleParagraphChange={handleParagraphChange}
      />,
    ]);
  };
  const sectionObj = {
    type: SECTION_TYPES[autocompleteValue],
    ...(SECTION_TYPES[autocompleteValue] === "paragraph" && {
      content: paragraphContent,
    }),
    ...(SECTION_TYPES[autocompleteValue] === "ordered list" && {
      content: content,
      // link: link,
    }),
    ...(SECTION_TYPES[autocompleteValue] === "photo" && {
      photo: selectedImage,
    }),
  };
  const linkObj = {
    type: "link",
    content: content,
    link: link,
  };

  const sendValue = (section) => {
    // const newImages = [...selectedImage, images];
    const newSections = [...sections, section];
    // setSelectedImage(newImages);
    setSections(newSections);
  };
  // this is the article object that will be stored in the database
  const articleObj = {
    title: titleRef.current.value,
    description: descriptionRef.current.value,
    date: new Date().toString(),
    section: sections,
  };
  const removeSection = (id) => {
    const removeArr = [...sections].filter((section) => section.id !== id);
    setSections(removeArr);
  };
  const updateSection = (sectionId, newValue) => {
    setSections((prev) =>
      prev.map((item) => (item.id === sectionId ? newValue : item))
    );
  };
  console.log(articleObj);
  console.log(sections);
  const handleSubmit = (e) => {
    // e.preventDefault();
    sendValue({ ...sectionObj, id: Math.random() });
  };
  return (
    <div className="flex flex-col items-center">
      <TextField inputRef={titleRef} placeholder="Title"></TextField>
      <TextField
        inputRef={descriptionRef}
        placeholder="Description"
      ></TextField>

      <BlogSection
        setContent={setContent}
        setLink={setLink}
        sendValue={sendValue}
        setAutocompleteValue={setAutocompleteValue}
        autocompleteValue={autocompleteValue}
        SECTION_TYPES={SECTION_TYPES}
        sectionObj={sectionObj}
        content={content}
        sections={sections}
        setSections={setSections}
        key={showArticleComponent.length}
        handleSubmit={handleSubmit}
        paragraphContent={paragraphContent}
        handleParagraphChange={handleParagraphChange}
      />

      {showArticleComponent.map((item) => item)}
      <button onClick={handleNewComponentOnClick}>
        Click to add component
      </button>
      <Button
        onClick={() => {
          handleSubmit(sectionObj);
        }}
      >
        Submit
      </Button>
      <BlogSectionRender
        blogObject={sections}
        articleObj={articleObj}
        selectedImage={selectedImage}
        removeSection={removeSection}
        updateSection={updateSection}
      />
    </div>
  );
}
