import { React, useState } from "react";
import { TextField, Button } from "@mui/material";

export default function Paragraph({ paragraphContent, handleParagraphChange }) {
  const [paragraphSections, setParagraphSections] = useState([]);
  const handleParagraphSubmit = (e) => {
    e.preventDefault();
    setParagraphSections([...paragraphSections, paragraphContent]);
  };
  console.log(paragraphSections);
  return (
    <form onSubmit={handleParagraphSubmit}>
      <TextField
        value={paragraphContent}
        onChange={handleParagraphChange}
        placeholder="Enter paragraph content"
      ></TextField>
      <Button type="submit">Add paragraph</Button>
    </form>
  );
}
// export default function Paragraph({
//   content,
//   setContent,
//   paragraphContent,
//   handleParagraphChange,
// }) {
//   // const [paragraphContent, setParagraphContent] = useState(content);
//   // const handleParagraphChange = (event) => {
//   //   setParagraphContent(event.target.value);
//   // };
//   return (
//     <div>
//       <TextField
//         value={paragraphContent}
//         onChange={handleParagraphChange}
//         placeholder="Paragraph"
//         multiline
//         rows={10}
//         sx={{ width: 500 }}
//       ></TextField>
//     </div>
//   );
// }
