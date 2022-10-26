import React from "react";

export default function BlogSectionRender({ blogObject, articleObj }) {
  // console.log(blogObject);
  return (
    <div>
      <div className="text-3xl font-bold">{articleObj.title}</div>
      {blogObject &&
        blogObject.map((x) => (
          <>
            <div>{x.section.content}</div>

            <div className="italic">{x.section.link}</div>
            {x.section.photo && <div>{x.section.photo.name}</div>}
          </>
        ))}
    </div>
  );
}
