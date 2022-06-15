const express = require("express");
const userControllers = require("../controllers/userControllers");
const route = express.Router();

route.get("/", userControllers.getAllUsers);
route.get("/:id", userControllers.getAUsers);
route.put("/:id", userControllers.update);
route.delete("/:id", userControllers.delete);

module.exports = route;
