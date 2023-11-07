import mongoose from "mongoose";
// eslint-disable-next-line no-unused-vars
function handlerError (error, req, res, next) {
  console.error(error); // for development
  if (error instanceof mongoose.Error.CastError) {
    res.status(400).json({ message: "Invalid id format" });
  }

  res
    .status(500)
    .json({ message: `${error.message} - Internal Server Error` });
}

export default handlerError;