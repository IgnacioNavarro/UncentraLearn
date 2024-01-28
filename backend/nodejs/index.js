require('dotenv').config();
const apiKey = process.env.NEXT_PUBLIC_API;
// Import the express module
const express=require('express');
const cors = require('cors');
const axios = require('axios');
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
  const postData = {
    "username": email,
    "strategies": [2],
    "callbackUrl": "http://localhost:3000/interests/",
    "fallbackUrl": "http://localhost:3000/interests/",
    "cancelUrl": "http://localhost:3000/interests/"
};
// Define the URL of the server you want to send the POST request to
const url = 'https://api.vottun.tech/cwll/v1/hash/new';
var config = {
  method: 'post',
  url: url,
  headers: { 
    'Authorization': 'Bearer '+ apiKey,
    'x-application-vkn': 'dudmav4ICJ4xPlpYI5Sh_Jie_evXw3g-gnTH3JqEZA30eIdlQ9Od8YBN2KxFoqcv',
    'Content-Type': 'application/json', 
  },
  data : postData
  };
  axios(config)
  .then(function (response) {
    // Handle the response from the server
    console.log('Response from server:', response.data);
    res.status(200).json({message: response.data.hash});
  })
  .catch(function (error) {
  // Handle any errors that occur during the POST request
  console.error('Error:', error);
  });
  
});



app.post('/wallet', (req, res) => {
  console.log('user has wallet ' + req.body.email);
  const email = req.body.email;
  const postData = {
    "userEmail": email,
};
// Define the URL of the server you want to send the POST request to
const url = 'https://api.vottun.tech/cwll/v1/evm/wallet/custodied/address';
var config = {
  method: 'get',
  url: url,
  headers: { 
    'Authorization': 'Bearer '+ apiKey,
    'x-application-vkn': 'dudmav4ICJ4xPlpYI5Sh_Jie_evXw3g-gnTH3JqEZA30eIdlQ9Od8YBN2KxFoqcv',
    'Content-Type': 'application/json', 
  },
  data : postData
  };
  axios(config)
  .then(function (response) {
    // Handle the response from the server
    console.log('Response from server:', response.data);
    res.status(200).json({message: response.data});
  })
  .catch(function (error) {
    // Handle any errors that occur during the POST request
    console.error('Error:', error);
  });
  
});



app.post('/pay', (req, res) => {
  console.log('user has wallet ' + req.body.email);
  const email = req.body.email;
  const postData = {
    "userEmail": email,
};
// Define the URL of the server you want to send the POST request to
const url = 'https://api.vottun.tech/cwll/v1/evm/wallet/custodied/address';
var config = {
  method: 'get',
  url: url,
  headers: { 
    'Authorization': 'Bearer '+ apiKey,
    'x-application-vkn': 'dudmav4ICJ4xPlpYI5Sh_Jie_evXw3g-gnTH3JqEZA30eIdlQ9Od8YBN2KxFoqcv',
    'Content-Type': 'application/json', 
  },
  data : postData
  };
  axios(config)
  .then(function (response) {
    // Handle the response from the server
    console.log('Response from server:', response.data);
    res.status(200).json({message: response.data});
  })
  .catch(function (error) {
    // Handle any errors that occur during the POST request
    console.error('Error:', error);
  });
  
});
