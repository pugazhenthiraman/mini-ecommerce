const express = require("express");

const router = express.Router();

const {
  getProducts,
  getSingleProduct,
} = require("../controler/productController");

router.route("/product").get(getProducts);
router.route("/product/:id").get(getSingleProduct);

module.exports = router;
