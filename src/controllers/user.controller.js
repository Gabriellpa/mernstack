const User = require("../models/user.model");
const Errs = require("../err/errs");
module.exports = {
  find: async (req, res) => {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (error) {
      return res.status(400).json("Error: " + error);
    }
  },

  store: async (req, res) => {
    const { username } = req.body;
    try {
      const newUser = new User({ username });
      await newUser.save();

      return res.json(`User ${username} added!`);
    } catch (error) {
      const err = Errs.validate(error);
      return err.call(res, err);
    }
  }
};
