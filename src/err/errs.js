const TypeErrs = require("./typeErrs");

module.exports = {
  validate: error => {
    try {
      const err = TypeErrs[error.name];
      if (!err) {
        return undefinedErr(error);
      }
      return {
        json: err[error.code].json,
        code: err[error.code].code,
        call: sendError
      };
    } catch (error) {
      return undefinedErr(error);
    }
  }
};

function sendError(res, err) {
  return res.status(err.code).json(err.json);
}

function undefinedErr(error) {
  return {
    json: {
      succes: false,
      message: "Internal Error!",
      error: error.message
    },
    code: 500,
    call: sendError
  };
}
