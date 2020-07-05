'use strict';

const express = require('express');
const app = express();

// we'll use this to look up old urls (the keys), and return
// the route they should be redirected to (the values)
const redirectsMap = {
  "/old-url-1": "/new-url-1",
  "/old-url-2": "/new-url-2",
  "/old-url-3": "/new-url-1",
  "/old-url-4": "/new-url-2"
};


function handleRedirects(req, res, next) {
  if (Object.keys(redirectsMap).find((entry) => entry === req.path)) {
      console.log(`Redirecting ${req.path} to ${redirectsMap[req.path]}`);
      res.redirect(301, redirectsMap[req.path]);
  } else {
    next();
  }
}
  
app.use(handleRedirects);

// this route says that when users make a request to the
// root URL, we'll return the HTML file at `views/index.html`
app.get("/", (req, res) => res.sendFile(`${__dirname}/views/index.html` ));

// when a request is made to `/new-url-1`, we return
// a plain text response saying `new-url-1`.
app.get("/new-url-1", (req, res) => res.send("new-url-1"));

app.get("/new-url-2", (req, res) => res.send("new-url-2"));

app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));


