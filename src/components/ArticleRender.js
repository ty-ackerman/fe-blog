import { map } from "draft-js/lib/DefaultDraftBlockRenderMap";
import React from "react";
import { sampledata } from "../sampledata";
export default function ArticleRender() {
  return (
    <div>
      {sampledata.root.children.map((x) => {
        console.log(x);
        if (x.children[0].text) {
          return <div>{x.children[0].text}</div>;
        }
      })}
    </div>
  );
}
