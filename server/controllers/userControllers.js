const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

const userControllers = {
  //Get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json({ users });
    } catch (err) {
      res.status(500).json({ message: "Server error. " + err.message });
    }
  },

  //Get a user by id
  getAUsers: async (req, res) => {
    try {
      const getUser = await User.findById(req.params.id);

      const { password, ...others } = getUser._doc;

      res.status(200).json({ message: "User found", others });
    } catch (err) {
      res.status(404).json({ messgae: "500 | User not found" });
    }
  },

  //Update a user
  update: async (req, res) => {
    const { id } = req.params;
    if (req.body.id === id) {
      if (req.body.password) {
        const salt = await bcrypt.genSalt(15);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }
      try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {
          new: true,
        });

        res.status(200).json({ message: "User updated.", updatedUser });
      } catch (err) {
        res.status(500).json({ message: "Server error. " + err.message });
      }
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  },

  //Delete a user and all  its created posts
  delete: async (req, res) => {
    const { id } = req.params;
    if (req.body.id === id) {
      try {
        const user = await User.findById(id);

        try {
          await Post.deleteMany({ user: user.username });
          await User.findByIdAndDelete(id);
          res.status(200).json({ message: "User deleted." });
        } catch (err) {
          res.status(500).json({ message: "Server error. " + err.message });
        }
      } catch (err) {
        res.status(404).json({ message: "User not found." });
      }
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  },
};

module.exports = userControllers;
