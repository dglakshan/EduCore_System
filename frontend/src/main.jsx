import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./assets/components/context/ThemeContext.jsx";
import { Toaster } from "react-hot-toast";
import { TeacherLoadProvider } from "./assets/components/context/TeacherLoadingContext.jsx";
// import { AuthProvider } from "./assets/components/context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <TeacherLoadProvider>
        {/* <AuthProvider> */}
        <Toaster />
        <ThemeProvider>
          <App />
        </ThemeProvider>
        {/* </AuthProvider> */}
      </TeacherLoadProvider>
    </StrictMode>
  </BrowserRouter>,
);
