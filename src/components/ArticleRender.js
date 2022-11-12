import React from "react";

export default function ArticleRender({ editorStateRef }) {
  return <div>hello {JSON.stringify(editorStateRef.current)}</div>;
}
