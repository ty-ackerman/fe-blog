import React from "react";
import { sampledata } from "../sampledata";

export default function ArticleRender() {
  return (
    <div className="article">
      <div className="article-block">
        {sampledata.root.children.map((x) => {
          // if the type is quote
          switch (x?.type) {
            case "quote":
              return <i>"{x?.children[0]?.text}"</i>;
            default:
              break;
          }
          switch (x?.format) {
            case "center":
              return <div className="center-align">{x?.children[0]?.text}</div>;
            case "right":
              return <div className="right-align">{x?.children[0]?.text}</div>;
            default:
              break;
          }
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
                <ul>
                  {x?.children?.map((x) => {
                    return <li>{x?.children[0].text}</li>;
                  })}
                </ul>
              );
            //render for organized list
            case "ol":
              return (
                <ol>
                  {x?.children?.map((x) => {
                    return <li>{x?.children[0].text}</li>;
                  })}
                </ol>
              );
            // render if there is no tag and children is an array
            default:
              return (
                <div>
                  {x?.children?.map((x) => {
                    switch (x?.format) {
                      //bold
                      case 1:
                        return <b>{x?.text}</b>;
                      //italic
                      case 2:
                        return <i>{x?.text}</i>;
                      //underline
                      case 8:
                        return <u>{x?.text}</u>;
                      // bold underline and italic
                      case 11:
                        return (
                          <b>
                            <i>
                              <u>{x?.text}</u>
                            </i>
                          </b>
                        );
                      //codeblock
                      case 16:
                        return <div className="codeblock">{x?.text}</div>;
                      default:
                        return x?.text;
                    }
                  })}
                </div>
              );
          }
        })}
      </div>
    </div>
  );
}
