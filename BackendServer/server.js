const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config()

// Get request
app.get('/ping', (req, res) => {
  res.send("Pong")
});



// const mongoose = require('mongoose');
// const mongodburi = process.env.MONGODB_URI;

// // Connect to MongoDB
// mongoose.connect(mongodburi, 
//   { useNewUrlParser: true, useUnifiedTopology: true });

// // Define a route to check the MongoDB connection status
// app.get('/mongo', (req, res) => {
//   if (mongoose.connection.readyState === 1) {
//     res.status(200).send('MongoDB connection is active.');
//   } else {
//     res.status(500).send('MongoDB connection is not active.');
//   }
// });


if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on PORT: ${port} 🚀`);
  });
}

module.exports = app;




