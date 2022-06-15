const Category = require("../models/Category");

const postControllers = {
  getAllCategories: async (req, res) => {
    try {
      const findCat = await Category.find();

      res.status(200).json(findCat);
    } catch (err) {
      res.status(500).json({ message: "Server error " + err.message });
    }
  },

  createCategory: async (req, res) => {
    try {
      const cat = new Category(req.body);
      const saveCat = await cat.save();

      res.status(201).json({
        message: `Post created.`,
        saveCat,
      });
    } catch (err) {
      res.status(500).json({ message: "Server error. " + err.message });
    }
  },
};

module.exports = postControllers;
