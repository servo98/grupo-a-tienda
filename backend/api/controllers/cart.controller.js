import Cart from "../models/Cart.js";

const getCart = async (req, res) => {
  try {
    const userId = req.userId;

    const cart = await Cart.findOne({
      user: userId,
    })
      .select("-__v -user")
      .populate("items.product");

    if (!cart) {
      return res.status(500).json({
        message: "El usuario no tiene carrito",
      });
    }

    return res.status(200).json({
      cart,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Error al obtener carrito",
      error: error.message,
    });
  }
};

const addProductToCart = async (req, res) => {
  try {
    const { productId, count } = req.body;

    const cart = await Cart.findOne({
      user: req.userId,
    });

    if (!cart) {
      return res.status(404).json({
        message: "El usuario no tiene carrito",
      });
    }

    const items = new Map();

    cart.items.forEach((item) => {
      items.set(item.product.toString(), item.quantity);
    });

    if (items.has(productId)) {
      // Sumar la cantidad del body con la que ya existe
      const newQuantity = +items.get(productId) + +count;
      items.set(productId, newQuantity);

      cart.items = Array.from(items, ([product, quantity]) => ({
        product,
        quantity,
      }));
    } else {
      // Agregar el producto al arreglo de items del carrito
      cart.items.push({
        product: productId,
        quantity: count,
      });
    }
    const updatedCart = await cart.save();

    return res.json({
      message: "Producto agregado al carrito",
      cart: updatedCart,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error al agregar producto al carrito",
      error: error.message,
    });
  }
};

export { getCart, addProductToCart };
