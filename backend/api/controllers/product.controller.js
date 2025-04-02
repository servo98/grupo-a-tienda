import Product from "../models/Product.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json({
      products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener productos",
    });
  }
};

const getProductById = async (req, res) => {};

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
    res.status(500).json({
      message: "Error al crear producto",
    });
  }
};
const updateProductById = async (req, res) => {};

export { getAllProducts, getProductById, createProduct, updateProductById };
