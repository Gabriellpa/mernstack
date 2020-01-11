const TypeErrs = require("./typeErrs");

module.exports = {
  validate: error => {
    try {
      const err = TypeErrs[error.name];
      if (!err) {
        return undefinedErr();
      }
      return {
        json: err[error.code].json,
        code: err[error.code].code,
        call: sendError
      };
    } catch (error) {
      return undefinedErr();
    }
  }
};

function sendError(res, err) {
  return res.status(err.code).json(err.json);
}

function undefinedErr() {
  return {
    json: {
      succes: false,
      message: "Internal Error!"
    },
    code: 500,
    call: sendError
  };
}
