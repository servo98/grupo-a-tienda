import { Router } from "express";
import { createOrder, getOrders } from "../controllers/order.controller.js";

const orderRouter = Router();

// Regresa todas las órdenes del usuario que haga la petición
orderRouter.get("/", getOrders);

// Crea una nueva orden asociada al usuario que haga la petición
orderRouter.post("/", createOrder);

export default orderRouter;
