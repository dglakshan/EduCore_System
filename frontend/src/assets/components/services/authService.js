import api from "./api";

export const getMe = async () => {
  try {
    const response = await api.get("/user");
    return response.data;
  } catch (err) {
    throw err.response?.data || "User fetch fail";
  }
};

export const login = async (credentials) => {
  try {
    const response = await api.post("/user/login", credentials);
    return response;
  } catch (err) {
    throw err;
  }
};

export const register = async (credentials) => {
  try {
    const response = await api.post("/user/register", credentials);
    return response;
  } catch (err) {
    throw err;
  }
};
