const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

// ... other routes would be here

function logErrors(err, req, res, next) {
  console.error(err);
  return res.status(500).json({error: 'Something went wrong'})
}

app.use(logErrors);