import React from "react";

export default function BlogSectionRender({ blogObject }) {
  console.log(blogObject);
  return (
    <div>
      {blogObject &&
        blogObject.map((x) => (
          <>
            <div>{x.section.content}</div>
            <div className="text-3xl font-bold">{x.title}</div>
            {/* <div>{blogObject.sections.map((x) => x.content)}</div> */}
          </>
        ))}
    </div>
  );
}
