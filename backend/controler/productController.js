const productModel = require("../models/productModel");

// get product API  - /api/v1/products
exports.getProducts = async (req, res, next) => {
  const products = await productModel.find();

  res.json({
    success: true,
    message: "get products is working",
    products,
  });
};

//get singleproduct API - /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
  try {
    console.log(req.params.id, "ID");
    const product = await productModel.findById(req.params.id);
    res.json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: " Sorry !,Unable to find the producut ID...  " + error.message,
    });
  }
};
