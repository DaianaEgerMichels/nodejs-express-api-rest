import IncorrectRequest from "./IncorrectRequest.js";

class ErrorValidation extends IncorrectRequest {
  constructor (error) {
    const messageError = Object.values(error.errors)
      .map((error) => error.message)
      .join("; ");
    super(`The following errors were found: ${messageError}`, 400);
  }
}

export default ErrorValidation;