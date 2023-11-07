import ErrorBase from "./ErrorBase.js";

class IncorrectRequest extends ErrorBase {
  constructor (message = "One or more fields are invalid") {
    super(message, 400);
  }
}

export default IncorrectRequest;