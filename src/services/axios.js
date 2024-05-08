import axios from "axios";

const instance = axios.create({
  baseURL: "https://readjourney.b.goit.study/api",
});

export const setAuthHeader = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = "";
};

export default instance;
