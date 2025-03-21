import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);

export default authRouter;

/**
 * Formas de mandar data de un cliente al servidor
 *
 * 1.- Body
 *      json {}
 * 2.- Query params
 *      ?name=Jhon&age=25
 * 3.- Url params
 *      http://localhost:3000/users/fernando/photos/25
 * 4.- Headers
 *    Authorization Bearer token
 *
 */
