import Order from "../models/Order.js";
import Cart from "../models/Cart.js";

const getOrders = () => {};
const createOrder = async (req, res) => {
  try {
    const userId = req.userId;

    const cart = await Cart.findOne({
      user: userId,
    }).populate("items.product");

    if (!cart || cart.items.length === 0) {
      return res.status(404).json({
        message: "El usuario no tiene carrito o está vacio",
      });
    }

    const itemsWithPrice = cart.items.map((item) => {
      return {
        product: item.product._id.toString(),
        quantity: item.quantity,
        price: item.product.price,
      };
    });

    const total = itemsWithPrice.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    const order = await Order.create({
      user: userId,
      items: itemsWithPrice,
      total,
    });

    cart.items = [];
    await cart.save();

    return res.status(201).json({
      message: "Orden creada",
      order,
    });
  } catch (error) {
    // console.error(error);
    return res.status(500).json({
      message: "Error al crear la orden",
      error: error.message,
    });
  }
};

export { getOrders, createOrder };
