import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const setAuthToken = (token) => {
  api.defaults.headers.common["Authorization"] = token;
};

export default api;
