import { createContext, useContext, useState } from "react";

export const TeacherLoadingContext = createContext();

export const TeacherLoadProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <TeacherLoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </TeacherLoadingContext.Provider>
  );
};
