const express = require("express");
const authControllers = require("../controllers/authControllers");
const route = express.Router();

route.post("/register", authControllers.userRegistration);
route.post("/login", authControllers.userLogin);

module.exports = route;
