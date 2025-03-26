import mongoose from "mongoose";

mongoose.connection.on("open", () => {
  console.log("DB connected ");
});

mongoose.connection.on("disconnected", () => {
  console.log("DB disconnected");
});

await mongoose.connect("mongodb://localhost:27017/tiendaTestDB");
