import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Usuario conectado al socket", socket.id);

  socket.on("message", (event) => {
    console.log("Mensaje recibido:", event);
    io.emit("message", event);
  });
});

io.listen(8081);
