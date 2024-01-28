// Import the express module
const express=require('express');
// Create an instance of the express application
const app=express();
// Specify a port number for the server
const port=8009;
// Start the server and listen to the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


//create a route for the login with email and password as body and return a json response
app.post('/login', (req, res) => {
    console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  //check if the email and password are correct
});
