const express = require("express");
const postControllers = require("../controllers/postControllers");
const route = express.Router();

route.get("/", postControllers.getAllPosts);
route.get("/:id", postControllers.getAPost);
route.post("/", postControllers.createPost);
route.put("/:id", postControllers.updatePost);
route.delete("/:id", postControllers.deletePost);

module.exports = route;
