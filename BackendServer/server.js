const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config()
const mongoose = require('mongoose')
const mongodburi = process.env.MONGODB_URI
const routes = require('./routes')
const bodyParser = require('body-parser')

// Middleware to parse JSON bodies
app.use(bodyParser.json())

// Get request
app.get('/ping', (req, res) => {
  res.send("Pong")
});

// connecting mongoDb
mongoose.connect(mongodburi)
.then((req,res) =>{
  console.log('Connection successful')
}).catch(error => console.log({ message :'Error connecting to mongoDb', error : error}))

// Define a route to check the MongoDB connection status
app.get('/mongo', (req, res) => {
  if(mongoose.connection.readyState === 1){
    res.status(200).json('MongoDb connection is successful')
  }else{
    res.status(400).json('Error connecting to mongodb')
  }
});

// Use the routes defined in Routes.js
app.use('/api', routes); // Prefixing all routes with '/api'

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on PORT: ${port} 🚀`);
  });
}

module.exports = app;


