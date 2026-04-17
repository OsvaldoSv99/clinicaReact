import "./App.css";
import PostList from "./pages/PostList";
import { Routes, Route } from "react-router-dom";
import PostCreate from "./pages/PostCreate";
import PostEdit from "./pages/PostEdit";
import PostShow from "./pages/PostShow";
import DashboardLayout from "./pages/layouts/DashboardLayout";
import PacienteIndex from "./pages/paciente/PacienteIndex";
import PacienteCreate from "./pages/paciente/PacienteCreate";
import PacienteEdit from "./pages/paciente/PacienteEdit";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<DashboardLayout />}>
          {/* Posts */}
          <Route path="/" element={<PostList />} />
          <Route path="/create" element={<PostCreate />} />
          <Route path="/edit/:id" element={<PostEdit />} />
          <Route path="/show/:id" element={<PostShow />} />

          {/* Pacientes */}
          <Route path="/pacientes" element={<PacienteIndex />} />
          <Route path="/pacientes/create" element={<PacienteCreate />} />
          <Route path="/pacientes/edit/:id" element={<PacienteEdit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
