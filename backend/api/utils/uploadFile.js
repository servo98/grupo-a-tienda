import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

import { cloudinaryCredentials } from "../config.js";

cloudinary.config({
  cloud_name: cloudinaryCredentials.cloudName,
  api_key: cloudinaryCredentials.apiKey,
  api_secret: cloudinaryCredentials.apiSecret,
});

const getFileName = () => {
  // TODO : Use a better way to generate unique file names
  return `product_${Date.now()}`;
};

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "productPhotos",
    formate: () => "png",
    public_id: (req, file) => getFileName(),
  },
});

const upload = multer({
  storage,
});

export default upload;
