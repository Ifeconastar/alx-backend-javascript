function MyAPI() {
  // Constructor for MyAPI
}

MyAPI.prototype.getResponseFromAPI = function() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous API call
    setTimeout(() => {
      const response = "Response from API";
      resolve(response);
      // In case of an error, you can reject the promise
      // reject(new Error("API Error"));
    }, 2000);
  });
};

export default MyAPI;

