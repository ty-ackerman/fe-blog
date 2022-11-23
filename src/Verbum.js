import { useRef, useState } from "react";
import {
  EditorComposer,
  Editor,
  ToolbarPlugin,
  AlignDropdown,
  BoldButton,
  CodeFormatButton,
  InsertDropdown,
  InsertLinkButton,
  ItalicButton,
  TextFormatDropdown,
  UnderlineButton,
  Divider,
} from "verbum";
import { Button } from "@mui/material";
import "./App.css";
const NoteViewer = () => {
  const [article, setArticle] = useState({});
  const editorStateRef = useRef();
  const saveContent = (content) => {
    setArticle(content);
    console.log(content);
  };
  const deepFilter = (obj, filter) => {
    //save under config file
    const properties = ["direction"];
    //iterate the object
    for (let key in obj) {
      const val = obj[key];
      if (properties.includes(key)) {
        delete obj[key];
      }

      //if val is also object (nested)
      if (typeof val === "object") {
        //recur
        deepFilter(val, filter);
      }
      // normal value
      else {
        //current val fails filter condition
        //delete it
        if (filter(val) === false) {
          delete obj[key];
        }
      }

      //if value is empty obj
      //delete it
      if (JSON.stringify(val) === "{}") {
        delete obj[key];
      }
    }
  };
  deepFilter(article, (s) => typeof s);

  console.log(article);
  console.log(JSON.stringify(article));

  return (
    <EditorComposer>
      <Editor
        hashtagsEnabled={true}
        onChange={(editorState) => (editorStateRef.current = editorState)}
      >
        <ToolbarPlugin defaultFontSize="20px">
          <BoldButton />
          <ItalicButton />
          <UnderlineButton />
          <CodeFormatButton />
          <InsertLinkButton />

          <TextFormatDropdown />
          <Divider />
          <InsertDropdown enablePoll={true} />
          <Divider />
          <AlignDropdown />
        </ToolbarPlugin>
        <Button
          onClick={() => {
            if (editorStateRef.current) {
              saveContent(JSON.parse(editorStateRef.current));
            }
          }}
        >
          Save
        </Button>
      </Editor>
    </EditorComposer>
  );
};

export default NoteViewer;
