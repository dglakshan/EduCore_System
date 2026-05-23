import { TeacherLoadingContext } from "../context/TeacherLoadingContext";
import { useContext } from "react";

export function useTeacherLoading() {
  const context = useContext(TeacherLoadingContext);
  return context;
}
