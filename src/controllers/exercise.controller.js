const Exercise = require("../models/exercise.model");
const Errs = require("../err/errs");

module.exports = {
  find: async (req, res) => {
    try {
      const exercises = await Exercise.find();
      return res.json(exercises);
    } catch (error) {
      const err = Errs.validate(error);
      return err.call(res, err);
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
      const err = Errs.validate(error);
      return err.call(res, err);
    }
  },

  findById: async (req, res) => {
    const { id } = req.params;
    try {
      const exercise = await Exercise.findById(id);
      return res.json(exercise);
    } catch {
      const err = Errs.validate(error);
      return err.call(res, err);
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { username, description, duration, date } = req.body;
    try {
      const exercise = await Exercise.findById(id);
      exercise.username = username;
      exercise.description = description;
      exercise.duration = Number(duration);
      exercise.date = Date.parse(date);

      const response = await exercise.save();
      return res.status(200).json(response);
    } catch {
      const err = Errs.validate(error);
      return err.call(res, err);
    }
  }
};
