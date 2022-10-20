import "./App.css";
import BlogEntry from "./components/BlogEntry";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BlogEntry />
    </div>
  );
}

export default App;
