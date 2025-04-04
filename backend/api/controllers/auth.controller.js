import User from "../models/User.js";
import Cart from "../models/Cart.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../config.js";

const register = async (req, res) => {
  try {
    const encyptedPassword = bcrypt.hashSync(req.body.password, 10);

    const user = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: encyptedPassword,
    });

    await Cart.create({
      user: user._id,
      items: [],
    });

    return res.json({ message: "User registered", user });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Error registering user",
        error: "Email already exists",
      });
    } else {
      res.status(500).json({
        message: "Error registering user",
        error: error.message,
      });
    }
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      res.status(401).json({
        message: "Invalid email",
      });
      return;
    }

    const passwordMatch = bcrypt.compareSync(password, user.password);

    if (!passwordMatch) {
      res.status(401).json({
        message: "Invalid credentials",
      });
      return;
    }

    const payload = {
      userId: user._id,
    };

    const token = jwt.sign(payload, jwtSecret, {
      expiresIn: "3h",
    });

    res.json({
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al hacer login",
    });
  }
};

export { login, register };
