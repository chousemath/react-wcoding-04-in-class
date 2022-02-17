import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

function App() {
  const [content, setContent] = useState({
    category: "",
    data: [],
  });
  return (
    <div className="app-container">
      <Sidebar setContent={setContent} />
      <Content content={content} />
    </div>
  );
}

export default App;
