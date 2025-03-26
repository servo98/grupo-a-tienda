import express from "express";
import morgan from "morgan";
import authRouter from "./routes/auth.routes.js";
import cartRouter from "./routes/cart.routes.js";
import orderRouter from "./routes/order.routes.js";
import productRouter from "./routes/product.routes.js";
import "./database.js";
import cors from "cors";
import { rateLimit } from "express-rate-limit";

const api = express();

api.use(
  rateLimit({
    windowMs: 10 * 1000,
    limit: 10,
  })
);

api.use(cors());

morgan.token("body", (req) => {
  return JSON.stringify(req.body);
});

api.use(morgan(":body"));

api.use(express.json());

api.get("/", (req, res) => {
  res.json({
    message: "API Live!",
  });
});

// TODO: Registrar todas las rutas
api.use("/api/auth", authRouter);
api.use("/api/carts", cartRouter);
api.use("/api/orders", orderRouter);
api.use("/api/products", productRouter);

export default api;
