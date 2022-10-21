import { useRef, useState } from "react";
import { TextField } from "@mui/material";
import BlogSection from "../Section/BlogSection";
export default function BlogArticle() {
  const SECTION_TYPES = {
    paragraph: "paragraph",
    link: "link",
    photo: "photo",
  };
  const [blogObject, setBlogObject] = useState();
  const [autocompleteValue, setAutocompleteValue] = useState("paragraph");
  const [selectedImage, setSelectedImage] = useState(null);

  const contentRef = useRef("");
  const titleRef = useRef("");
  const linkRef = useRef("");

  const sendValue = () => {
    setBlogObject({
      title: titleRef.current.value,
      date: new Date().toString(),
      sections: [
        {
          type: SECTION_TYPES[autocompleteValue],
          ...(SECTION_TYPES[autocompleteValue] === "paragraph" && {
            content: contentRef.current.value,
          }),
          ...(SECTION_TYPES[autocompleteValue] === "link" && {
            content: contentRef.current.value,
            link: linkRef.current.value,
          }),
          ...(SECTION_TYPES[autocompleteValue] === "photo" && {
            photo: selectedImage,
          }),
        },
      ],
    });
  };
  console.log(blogObject);
  return (
    <div className="flex flex-col items-center">
      <TextField inputRef={titleRef} placeholder="Title"></TextField>

      <BlogSection
        sendValue={sendValue}
        contentRef={contentRef}
        linkRef={linkRef}
        setAutocompleteValue={setAutocompleteValue}
        autocompleteValue={autocompleteValue}
        SECTION_TYPES={SECTION_TYPES}
        blogObject={blogObject}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </div>
  );
}
