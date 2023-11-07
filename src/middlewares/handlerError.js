import mongoose from "mongoose";
import ErrorBase from "../errors/ErrorBase.js";
import IncorrectRequest from "../errors/IncorrectRequest.js";
import ErrorValidation from "../errors/ErrorValidation.js";
// eslint-disable-next-line no-unused-vars
function handlerError (error, req, res, next) {
  console.error(error); // for development
  if (error instanceof mongoose.Error.CastError) {
    new IncorrectRequest().sendResponse(res);
  } else if (error instanceof mongoose.Error.ValidationError) {
    new ErrorValidation(error).sendResponse(res);
  } else {
    new ErrorBase().sendResponse(res);
  }

}

export default handlerError;