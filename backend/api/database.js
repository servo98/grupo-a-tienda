import mongoose from "mongoose";
import { mongoURI } from "./config.js";

mongoose.connection.on("open", () => {
  console.log("DB connected ");
});

mongoose.connection.on("disconnected", () => {
  console.log("DB disconnected");
});

await mongoose.connect(mongoURI);
