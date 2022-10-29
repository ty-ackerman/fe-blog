import React from "react";
import { TextField, Typography, Button } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Link from "./Link";
import BlogSectionDropDown from "../Section/BlogSectionDropDown";
export default function Paragraph({
  autocompleteValue,
  content,
  setContent,
  link,
  setLink,
  handleSubmit,
  sectionObj,
  sendValue,
  linkObj,
}) {
  const linkSubmit = () => {
    sendValue({ ...linkObj, id: Math.random() });
    setLink("");
  };
  return (
    <div>
      <Tooltip
        interactive="true"
        title={
          <React.Fragment>
            {/* <BlogSectionDropDown /> */}
            <Link
              link={link}
              setLink={setLink}
              content={content}
              setContent={setContent}
              handleSubmit={handleSubmit}
              sectionObj={sectionObj}
              linkObj={linkObj}
              sendValue={sendValue}
            />
            <Button
              onClick={() => {
                linkSubmit(linkObj);
              }}
            >
              Add Link
            </Button>
          </React.Fragment>
        }
      >
        <TextField
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Paragraph"
          multiline
          rows={10}
          sx={{ width: 500 }}
        ></TextField>
      </Tooltip>
    </div>
  );
}
