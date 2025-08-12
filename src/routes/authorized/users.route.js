
const express = require("express");
const router = express.Router();
const controller = require("../../controllers").user;

//@route    GET users
//@desc     current user data
//@access   Private
router.get("/", controller.user);

module.exports = router;
