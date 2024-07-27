class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400; //for response to be success=True,the statusCode should be < 400
  }
}

export { ApiResponse };

/*
The ApiResponse class helps you standardize and simplify how you send responses from your API.It ensures
 that each response includes a status code, data, and a message, while also providing an easy way to indicate
whether the request was successful.This makes your API responses more predictable and easier to work with.
*/
