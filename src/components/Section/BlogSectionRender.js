import React from "react";

export default function BlogSectionRender({
  blogObject,
  articleObj,
  selectedImage,
}) {
  console.log(blogObject);
  return (
    <div>
      <div className="text-3xl font-bold">{articleObj.title}</div>
      <div>{articleObj.date}</div>
      {blogObject &&
        blogObject.map((x) => (
          <>
            <div>{x.content}</div>

            <div className="italic">{x.link}</div>
            {x.photo && <div>{x.photo.name}</div>}
          </>
        ))}
    </div>
  );
}
