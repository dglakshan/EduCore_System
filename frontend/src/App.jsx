import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AdminDashBoard } from "./pages/Dashboard";
import { Login } from "./pages/Login/Login";
import { TeacherPortal } from "./pages/Teachers";

function App() {
  return (
    <Routes>
      <Route path="admin/dashboard" element={<AdminDashBoard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/teacherportal/*" element={<TeacherPortal />} />
    </Routes>
  );
}

export default App;
