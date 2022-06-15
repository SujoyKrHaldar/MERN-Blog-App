const User = require("../models/User");
const bcrypt = require("bcrypt");

const authControllers = {
  //Register a user
  userRegistration: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(15);

      const hashPassword = await bcrypt.hash(req.body.password, salt);

      const newUser = new User({
        username: req.body.username,
        password: hashPassword,
        email: req.body.email,
      });

      const { password, ...others } = newUser._doc;

      await newUser.save();

      res.status(201).json({
        message: `${req.body.username} registered successfully`,
        others,
      });

      console.log("User registered successfully.");
    } catch (err) {
      res.status(500).json({ message: "Server error. " + err.message });
    }
  },

  // User login
  userLogin: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const validatepassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!validatepassword) {
        return res.status(404).json({ message: "Incorrect password" });
      }

      const { password, ...data } = user._doc;

      res.status(200).json({ data });
    } catch (err) {
      res.status(500).json({ message: "Server error. " + err.message });
    }
  },
};

module.exports = authControllers;
