const responseHelper = require("../helpers/response.helper");
const Product = require("../models/product.model");

const createProduct = async (req, res) => {

  try {
    const productData = req.body;
    const product = await Product.create(productData);
    const message = "Product created";
    return responseHelper.success(res, product, message);
  } catch (err) {
    return responseHelper.requestfailure(res, err);
  }
};

const getAllProducts = async (req, res) => {

    try {
      const filter = {};
      if (req.query.category) {
        filter.category = req.query.category;
      }
      const products = await Product.find(filter);
      const message = "Products list fetched";
      return responseHelper.success(res, products, message);
    } catch (err) {
      return responseHelper.requestfailure(res, err);
    }
  };
  

const getProductById = async (req, res) => {
    
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return responseHelper.requestfailure(res, "Product not found", 404);
    }

    return responseHelper.success(res, product, "Passenger retrieved");
  } catch (err) {
    return responseHelper.requestfailure(res, err);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
};
