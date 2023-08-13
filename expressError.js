// same as in-unit exercises = extends the typical js error to add a status when there is an instance of it

class ExpressError extends Error {
    constructor(message, status) {
      super();
      this.message = message;
      this.status = status;
      console.error(this.stack);
    }
  }
  
  
  module.exports = ExpressError;