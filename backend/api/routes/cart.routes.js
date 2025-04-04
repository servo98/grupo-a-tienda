import { Router } from "express";
import { getCart, addProductToCart } from "../controllers/cart.controller.js";

const cartRouter = Router();

// Regresa el carrito del usuario que haga la petición
cartRouter.get("/", getCart);

cartRouter.put("/add", addProductToCart);

export default cartRouter;
