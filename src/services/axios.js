import axios from "axios";

import { store } from "@/store/store";
import { setTokens } from "@/store/auth/slice";

const instance = axios.create({
  baseURL: "https://readjourney.b.goit.study/api",
});

export const setAuthHeader = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = "";
};

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      error.response.status === 401 &&
      !error.request.responseURL.includes("signin")
    ) {
      try {
        const refreshToken = store.getState().auth.refreshToken;
        setAuthHeader(refreshToken);

        const { data } = await instance.get("/users/current/refresh");

        setAuthHeader(data.token);
        store.dispatch(setTokens(data));
        error.config.headers.authorization = `Bearer ${data.token}`;

        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
