import "./App.css";
import PostList from "./pages/PostList";
import { Routes, Route } from "react-router-dom";

import PostCreate from "./pages/PostCreate";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/create" element={<PostCreate />} />
      </Routes>
    </div>
  );
}

export default App;
