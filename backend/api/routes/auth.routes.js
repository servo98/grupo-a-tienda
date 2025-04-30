import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";
import validateBody from "../middlewares/validateBody.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const authRouter = Router();

authRouter.post("/register", validateBody(registerSchema), register);
authRouter.post("/login", validateBody(loginSchema), login);

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
