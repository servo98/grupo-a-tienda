import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

let mongoServer;
const connectDB = async () => {
  mongoServer = await MongoMemoryServer.create({
    instance: {
      dbName: "testDB",
      port: 27017,
    },
  });
  const mongoURI = mongoServer.getUri();

  console.log(`MongoDB URI: ${mongoURI}`);

  await mongoose.connect(mongoURI);
};

const disconnectDB = async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
};

const dropDatabase = async () => {
  const collections = await mongoose.connection.db.collections();

  await Promise.all(collections.map((collections) => collections.drop()));
};

export { connectDB, disconnectDB, dropDatabase };
