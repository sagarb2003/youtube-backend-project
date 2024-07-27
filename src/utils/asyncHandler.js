const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };


/*
The asyncHandler utility is designed to simplify error handling in asynchronous Express.js route handlers.
By wrapping your async route handlers with asyncHandler, you ensure that any errors thrown or rejected
promises are automatically caught and passed to the Express error-handling middleware.
 This helps in maintaining cleaner code and more manageable error handling in your application.
*/
