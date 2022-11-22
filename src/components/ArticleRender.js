import React from "react";
import { sampledata } from "../sampledata";
export default function ArticleRender() {
  return (
    <div>
      {/* {console.log(sampledata.root.children)} */}
      {sampledata.root.children.map((x) => {
        console.log(x.children);

        switch (x?.tag) {
          case "h1":
            return <h1>{x?.children[0]?.text}</h1>;
          case "h2":
            return <h2>{x?.children[0]?.text}</h2>;
          case "h3":
            return <h3>{x?.children[0]?.text}</h3>;
          //render for bulleted list
          case "ul":
            return (
              <p>
                {x?.children[0].children?.map((x) => {
                  return x?.text;
                })}
              </p>
            );
          //render for organized list
          case "ol":
            return (
              <p>
                {x?.children[0].children?.map((x) => {
                  return x?.text;
                })}
              </p>
            );
          // render if there is no tag and children is an array

          default:
            return (
              <p>
                {x?.children?.map((x) => {
                  return x?.text;
                })}
              </p>
            );
        }
      })}
    </div>
  );
}
