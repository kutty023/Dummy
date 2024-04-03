const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config()

// Get request
app.get('/ping', (req, res) => {
  res.send("Pong")
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on PORT: ${port} 🚀`);
  });
}

module.exports = app;
