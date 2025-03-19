import express from "express";

const api = express();

api.get("/", (req, res) => {
  res.json({
    message: "API Live!",
  });
});

export default api;
