const Exercise = require("../models/exercise.model");

module.exports = {
  find: async (req, res) => {
    try {
      const exercises = await Exercise.find();
      return res.json(exercises);
    } catch (error) {
      return res.status(400).json("Error: " + error);
    }
  },

  store: async (req, res) => {
    const { username, description, duration, date } = req.body;

    try {
      const newExercise = new Exercise({
        username,
        description,
        duration: Number(duration),
        date: Date.parse(date)
      });
      await newExercise.save();

      return res.json(`Exercise ${description} added!`);
    } catch (error) {
      return res.status(400).json("Error: " + error);
    }
  },

  findById: async (req, res) =>{

  }
};
