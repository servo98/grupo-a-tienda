import Product from "../models/Product.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(
      {},
      {
        photos: { $slice: 1 },
      }
    ).select("-__v -createdBy -description");

    const responseProducts = products.map((product) => {
      return {
        _id: product._id,
        name: product.name,
        price: product.price,
        photo: product.photos[0],
      };
    });
    return res.json({
      products: responseProducts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al obtener productos",
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await Product.findById(productId).populate(
      "createdBy",
      "-password -__v -email -_id -id"
    );

    if (!product) {
      return res.status(404).json({
        message: "Producto no encontrado",
      });
    }

    return res.json({
      product,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error al obtener producto por id" });
  }
};

const createProduct = async (req, res) => {
  try {
    const { description, name, price } = req.body;

    const { userId } = req;

    const urls = req.files.map((file) => {
      return file.path;
    });

    const product = await Product.create({
      description,
      name,
      photos: urls,
      price,
      createdBy: userId,
    });

    return res.json({
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al crear producto",
    });
  }
};
const updateProductById = async (req, res) => {
  try {
    const { productId } = req.params;

    const urls = req.files.map((file) => {
      return file.path;
    });

    const tempPhotos = urls.length != 0 ? { photos: urls } : {};

    const product = await Product.findById(productId);

    if (product.createdBy != req.userId) {
      return res.status(403).json({
        message: "Invalid update",
      });
    }

    const updatedProduct = await product.updateOne(
      {
        ...req.body,
        ...tempPhotos,
      },
      {
        new: true,
      }
    );

    return res.json({
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Error al actualizar producto");
    console.error(error);
  }
};

const getAdminProducts = async (req, res) => {
  const { userId } = req;
  try {
    const products = await Product.find(
      {
        createdBy: userId,
      },
      {
        photos: { $slice: 1 },
      }
    );

    const responseProducts = products.map((product) => {
      return {
        _id: product._id,
        name: product.name,
        price: product.price,
        photo: product.photos[0],
      };
    });
    return res.json({
      products: responseProducts,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error al obtener productos de admin",
    });
  }
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  getAdminProducts,
};
