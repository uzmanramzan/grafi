
const express = require("express");
const router = express.Router();
const controller = require("../../controllers").product;

//@route    GET users
//@desc     current user data
//@access   Private
router.get("/", controller.getAllProducts);
router.get("/:id", controller.getProductById);
router.post("/", controller.createProduct);

module.exports = router;
