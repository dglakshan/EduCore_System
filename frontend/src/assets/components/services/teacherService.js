import api from "./api";

export const teacherData = async () => {
  try {
    const response = await api.get("/teacher/dashboard");

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
