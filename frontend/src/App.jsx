import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AdminDashBoard } from "./pages/Dashboard";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="admin/dashboard" element={<AdminDashBoard />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
