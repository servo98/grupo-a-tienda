import { Router } from "express";
import { getCart, updateCart } from "../controllers/cart.controller.js";

const cartRouter = Router();

// Regresa el carrito del usuario que haga la petición
cartRouter.get("/", getCart);

// Actualiza el carrito del usuario que haga la petición
cartRouter.put("/", updateCart);

export default cartRouter;
