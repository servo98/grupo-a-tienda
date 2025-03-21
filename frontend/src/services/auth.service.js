import api from "./api";

const register = (firstName, lastName, email, password) => {
  return api.post("/auth/register", {
    firstName,
    lastName,
    email,
    password,
  });
};

const login = (email, password) => {
  return api.post("/auth/login", {
    email,
    password,
  });
};

export { login, register };
