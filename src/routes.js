const userRoutes = require("./routes/user");
const exerciseRoutes = require("./routes/exercise");

module.exports = app => {
  app.use("/user", userRoutes);
  app.use("/exercise", exerciseRoutes);
};
