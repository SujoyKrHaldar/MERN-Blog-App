const express = require("express");
const categoryControlles = require("../controllers/categoryControllers");
const route = express.Router();

route.get("/", categoryControlles.getAllCategories);
route.post("/", categoryControlles.createCategory);
// route.put("/:id", categoryControlles.updateCategory);
// route.delete("/:id", categoryControlles.deleteCategory);

module.exports = route;
