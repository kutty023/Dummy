const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config()
const mongoose = require('mongoose')
const mongodburi = process.env.MONGODB_URI

// Get request
app.get('/ping', (req, res) => {
  res.send("Pong")
});

// connecting mongoDb
mongoose.connect(mongodburi)

// Define a route to check the MongoDB connection status
app.get('/mongoDbConnection', (req, res) => {
  if(mongoose.connection.readyState === 1){
    res.status(200).json('MongoDb connection is successful')
  }else{
    res.status(400).json('Error connecting to mongodb')
  }
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on PORT: ${port} 🚀`);
  });
}

module.exports = app;




