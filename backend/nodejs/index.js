// Import the express module
const express=require('express');
const cors = require('cors');
// Create an instance of the express application
const app=express();
// Middleware to parse JSON bodies
app.use(express.json());
// Use the CORS middleware
app.use(cors());
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
  res.status(200).json({message: 'login successful'});
  //check if the email and password are correct
});

//create a route for the login with email and password as body and return a json response
app.post('/register', (req, res) => {
  console.log('registered new user ' + req.body.email);
  const email = req.body.email;
  const password = req.body.password;
  res.status(200).json({message: 'registered'});
});
