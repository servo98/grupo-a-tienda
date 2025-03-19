import http from "http";
import api from "./api/api.js";

const server = http.createServer(api);

server.on("listening", () => {
  console.info("Server listening on port 8080");
});

server.on("error", (error) => {
  console.error("Error on server", error);
});

server.listen(8080);
