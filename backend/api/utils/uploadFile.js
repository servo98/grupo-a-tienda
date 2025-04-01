import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

import { cloudinaryCredentials } from "../config.js";

cloudinary.config({
  cloud_name: cloudinaryCredentials.cloudName,
  api_key: cloudinaryCredentials.apiKey,
  api_secret: cloudinaryCredentials.apiSecret,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "productPhotos",
    formate: () => "png",
    public_id: (req, file) => file.originalname.split(".")[0],
  },
});

const upload = multer({
  storage,
});

export default upload;
