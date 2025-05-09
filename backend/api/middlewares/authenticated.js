import jwt from "jsonwebtoken";
import { jwtSecret } from "../config.js";

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const authenticated = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({
      message: "Missing token",
    });
  }

  try {
    const payload = jwt.verify(token, jwtSecret);

    const { userId } = payload;

    req.userId = userId;

    next();
  } catch (error) {
    console.error("Error al autenticar el token:", error);
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

export default authenticated;
