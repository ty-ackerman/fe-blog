import React from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import { sampledata } from "../sampledata";
export default function ArticleRender() {
  return (
    <div>
      {/* {console.log(sampledata.root.children)} */}
      {sampledata.root.children.map((x) => {
        console.log(x.children);
        if (x?.tag === "h1") return <h1>{x?.children[0]?.text}</h1>;
        if (x?.tag === "h2") return <p>{x?.children[0]?.text}</p>;
        if (x?.tag === "h3") return <p>{x?.children[0]?.text}</p>;
        // render if there is no tag and children is an array
        if (!x?.tag)
          return (
            <p>
              {x?.children?.map((x) => {
                return x?.text;
              })}
            </p>
          );
        //render for bulleted list
        if (x?.tag === "ul") {
          console.log(x?.children[0].children[0].text);
          return (
            <p>
              {x?.children[0].children?.map((x) => {
                return x?.text;
              })}
            </p>
          );
        }
      })}
    </div>
  );
}
