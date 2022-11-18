import React from "react";
import { sampledata } from "../sampledata";
export default function ArticleRender() {
  return (
    <div>
      {console.log(sampledata.root.children)}
      {sampledata.root.children.map((x) => {
        if (x?.tag === "h1") return <h1>{x?.children[0]?.text}</h1>;
      })}
    </div>
  );
}
