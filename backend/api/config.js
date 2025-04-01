import dotenv from "dotenv";

dotenv.config();

export const mongoURI = process.env.MONGO_URI;

export const jwtSecret = process.env.JWT_SECRET;

export const cloudinaryCredentials = {
  cloudName: process.env.CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_API_KEY,
  apiSecret: process.env.CLOUDINARY_API_SECRET,
};
