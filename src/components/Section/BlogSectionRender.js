import { React } from "react";
import { FaWindowClose } from "react-icons/fa";

export default function BlogSectionRender({
  blogObject,
  articleObj,
  selectedImage,
  removeSection,
  editSection,
  updateSection,
}) {
  return (
    <div className="items-center justify-center">
      <div className="text-3xl font-bold">{articleObj.title}</div>

      {blogObject &&
        blogObject.map((x) => (
          <div className="flex justify-center " key={x.id}>
            <div className="w-9/12">{x.content}</div>
            <div className="italic">{x.link}</div>
            <div>{x.photo && <div>{x.photo.name}</div>}</div>
            <FaWindowClose onClick={() => removeSection(x.id)} />
          </div>
        ))}
    </div>
  );
}
