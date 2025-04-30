import cors from "cors";
import express from "express";
import { rateLimit } from "express-rate-limit";
import morgan from "morgan";

import adminProductRouter from "./routes/admin.product.routes.js";
import authRouter from "./routes/auth.routes.js";
import cartRouter from "./routes/cart.routes.js";
import orderRouter from "./routes/order.routes.js";
import productRouter from "./routes/product.routes.js";

import authenticated from "./middlewares/authenticated.js";

const api = express();

api.use(
  rateLimit({
    windowMs: 10 * 1000,
    limit: 30,
  })
);

api.use(cors());

morgan.token("body", (req) => {
  return JSON.stringify(req.body);
});

// api.use(morgan(":body"));

api.use(express.json());

api.get("/", (req, res) => {
  res.json({
    message: "API Live!",
  });
});

// TODO: Registrar todas las rutas
api.use("/api/auth", authRouter);
api.use("/api/cart", authenticated, cartRouter);
api.use("/api/orders", authenticated, orderRouter);
api.use("/api/products", productRouter);
api.use("/api/admin/products", authenticated, adminProductRouter);

export default api;
