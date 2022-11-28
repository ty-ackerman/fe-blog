import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicExample from "./components/Navbar/Navbar";
import NoteViewer from "./Verbum";
import ArticleRender from "./components/ArticleRender";
import Editor from "./Editor";
import "bootstrap/dist/css/bootstrap.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BasicExample />
    <BrowserRouter>
      <Routes>
        <Route path="verbum" element={<NoteViewer />}></Route>
        <Route path="render" element={<ArticleRender />}></Route>
        <Route path="lexical" element={<Editor />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
