import { Button, TextField } from "@mui/material";
import { React, useRef, useState } from "react";
import BlogEntryRender from "./BlogEntryRender";
import BlogSectionDropDown from "./BlogSectionDropDown";

export default function BlogEntry() {
  const SECTION_TYPES = { paragraph: "paragraph", link: "link" };
  const [blogObject, setBlogObject] = useState();
  const paragraphRef = useRef("");
  const titleRef = useRef("");

  const sendValue = () => {
    setBlogObject({
      title: titleRef.current.value,
      date: new Date().toString(),
      sections: [
        { type: SECTION_TYPES.paragraph, content: paragraphRef.current.value },
      ],
    });
  };
  return (
    <div className="flex flex-col items-center">
      <BlogSectionDropDown SECTION_TYPES={SECTION_TYPES} />
      <TextField inputRef={titleRef} placeholder="Title"></TextField>
      <TextField inputRef={paragraphRef} placeholder="Your Post"></TextField>
      <Button onClick={sendValue}>Submit</Button>
      <BlogEntryRender blogObject={blogObject} />
    </div>
  );
}