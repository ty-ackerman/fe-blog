import React from "react";

export default function BlogEntryRender({ blogObject }) {
  return (
    <div>
      {blogObject && (
        <>
          <div>{blogObject.date}</div>
          <div className="text-3xl font-bold">{blogObject.title}</div>
          <div>{blogObject.sections.map((x) => x.content)}</div>
        </>
      )}
    </div>
  );
}
