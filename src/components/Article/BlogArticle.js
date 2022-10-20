import { useRef, useState } from "react";
import { TextField } from "@mui/material";
import BlogSection from "../Section/BlogSection";
export default function BlogArticle() {
  const SECTION_TYPES = {
    paragraph: "paragraph",
    link: "link",
    photo: "photo",
    blockquote: "blockquote",
  };
  const [blogObject, setBlogObject] = useState();
  const [autocompleteValue, setAutocompleteValue] = useState("");
  const paragraphRef = useRef("");
  const titleRef = useRef("");

  const sendValue = () => {
    setBlogObject({
      title: titleRef.current.value,
      date: new Date().toString(),
      sections: [
        {
          type: SECTION_TYPES[autocompleteValue],
          content: paragraphRef.current.value,
        },
      ],
    });
  };

  return (
    <div className="flex flex-col items-center">
      <TextField inputRef={titleRef} placeholder="Title"></TextField>
      <BlogSection
        sendValue={sendValue}
        paragraphRef={paragraphRef}
        setAutocompleteValue={setAutocompleteValue}
        SECTION_TYPES={SECTION_TYPES}
        blogObject={blogObject}
      />
    </div>
  );
}
