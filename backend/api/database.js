import mongoose from "mongoose";
import { mongoURI } from "./config.js";

mongoose.connection.on("open", () => {
  console.log("DB connected ");
});

mongoose.connection.on("disconnected", () => {
  console.log("DB disconnected");
});
if (process.env.NODE_ENV !== "test") {
  await mongoose.connect(mongoURI);
} else {
  import("mongodb-memory-server").then(async ({ MongoMemoryServer }) => {
    const mongoServer = await MongoMemoryServer.create({
      instance: {
        dbName: "testDB",
        port: 27017,
      },
    });
    const mongoURI = mongoServer.getUri();

    console.log(`MongoDB URI: ${mongoURI}`);

    await mongoose.connect(mongoURI);
  });
}
