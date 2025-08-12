
const express = require("express");
const router = express.Router();
var auth = require("../../middlewares").auth;
const usersRoutes = require("./users.route");
const productRoutes = require("./products.route")

//@route     users
//@desc     inital route
//@access   private
router.use("/users", auth.authenticate, usersRoutes);
router.use("/products", auth.authenticate, productRoutes);

module.exports = router;
