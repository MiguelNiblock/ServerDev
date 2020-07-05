'use strict';

const express = require('express');
const app = express();

function requestLogger(req, res, next) {
  const now = new Date();
  console.log(
    `${now.toLocaleDateString()} ${now.toLocaleTimeString()} ${req.method} ${req.url}`);
  next();
}

function addFooToReq(req, res, next) {
  console.log('Setting `request.foo` to equal "bar"');
  req.foo = 'bar';
  next();
}

app.use(requestLogger);
app.use(addFooToReq);

// note that we could also do
// app.use([requestLogger, addFooToReq]);


app.get('/url-1', (req, res) => res.send('request made to /url-1'));
app.get('/url-2', (req, res) => {
  console.log(`This is /url-2 and req.foo is ${req.foo}`);
  return res.send('request made to /url-2');
});


app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));


