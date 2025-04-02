import { Router } from "express";
import upload from "../utils/uploadFile.js";
import {
  createProduct,
  getAdminProducts,
  updateProductById,
} from "../controllers/product.controller.js";

const adminProductRouter = Router();

adminProductRouter.post("/", upload.array("photos"), createProduct);
adminProductRouter.get("/", getAdminProducts);
adminProductRouter.put(
  "/:productId",
  upload.array("photos"),
  updateProductById
);

export default adminProductRouter;
