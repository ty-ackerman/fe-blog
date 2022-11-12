import { FC } from "react";
import { useRef } from "react";
import {
  EditorComposer,
  Editor,
  ToolbarPlugin,
  AlignDropdown,
  BackgroundColorPicker,
  BoldButton,
  CodeFormatButton,
  FloatingLinkEditor,
  FontFamilyDropdown,
  FontSizeDropdown,
  InsertDropdown,
  InsertLinkButton,
  ItalicButton,
  TextColorPicker,
  TextFormatDropdown,
  UnderlineButton,
  Divider,
} from "verbum";
import { Button } from "@mui/material";
const NoteViewer = () => {
  const editorStateRef = useRef();
  const saveContent = (content) => {
    console.log(content);
  };
  console.log(editorStateRef);
  return (
    <EditorComposer>
      <Editor
        hashtagsEnabled={true}
        onChange={(editorState) => (editorStateRef.current = editorState)}
      >
        <ToolbarPlugin defaultFontSize="20px">
          <FontFamilyDropdown />
          <FontSizeDropdown />
          <Divider />
          <BoldButton />
          <ItalicButton />
          <UnderlineButton />
          <CodeFormatButton />
          <InsertLinkButton />
          <TextColorPicker />
          <BackgroundColorPicker />
          <TextFormatDropdown />
          <Divider />
          <InsertDropdown enablePoll={true} />
          <Divider />
          <AlignDropdown />
        </ToolbarPlugin>
        <Button
          onClick={() => {
            if (editorStateRef.current) {
              saveContent(editorStateRef.current);
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
