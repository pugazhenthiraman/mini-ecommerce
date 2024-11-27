const express = require("express");
const { createOrder } = require("../controler/orderConstroller");

const router = express.Router();

router.route("/order").post(createOrder);

module.exports = router;
