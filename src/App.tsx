import "./App.css";
import PostList from "./pages/PostList";
import { Routes, Route } from "react-router-dom";
import PostCreate from "./pages/PostCreate";
import PostEdit from "./pages/PostEdit";
import PostShow from "./pages/PostShow";
import DashboardLayout from "./pages/layouts/DashboardLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<PostList />} />
          <Route path="/create" element={<PostCreate />} />
          <Route path="/edit/:id" element={<PostEdit />} />
          <Route path="/show/:id" element={<PostShow />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
