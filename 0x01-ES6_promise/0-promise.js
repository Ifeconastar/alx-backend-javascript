function MyAPI() {
  // Constructor for MyAPI
}

MyAPI.prototype.getResponseFromAPI = function() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      const response = "Response from API";
      resolve(response);
      // In case of an error, you can reject the promise
      // reject(new Error("API Error"));
    }, 2000);
  });
};

// Usage example
const myApi = new MyAPI();
myApi.getResponseFromAPI()
  .then(response => {
    console.log(response); // Output: "Response from API"
  })
  .catch(error => {
    console.error(error); // Output: Error message in case of rejection
  });

