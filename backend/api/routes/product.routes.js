import { Router } from "express";
import upload from "../utils/uploadFile.js";
import authenticated from "../middlewares/authenticated.js";

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
} from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.get("/", getAllProducts);
productRouter.get("/:idProduct", getProductById);
productRouter.post("/", authenticated, upload.array("photos"), createProduct);
productRouter.put("/:idProduct", updateProductById);

export default productRouter;
