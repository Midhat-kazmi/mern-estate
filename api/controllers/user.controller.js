

export const test = (req, res) => {
  res.json({
    message: 'Api route is working',
  });
}; // This is a simple controller function that sends a JSON response with a message of 'Hello World' when the /test route is hit. This function will be used in the user.route.js file to handle the /test route.