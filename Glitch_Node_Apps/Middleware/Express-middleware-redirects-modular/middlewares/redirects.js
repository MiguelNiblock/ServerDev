'use strict';
const redirectsMap = require('../redirectsMap');


function handleRedirects(req, res, next) {
  if (Object.keys(redirectsMap).find((entry) => entry === req.path)) {
    console.log(`Redirecting ${req.path} to ${redirectsMap[req.path]}`);
    res.redirect(301, redirectsMap[req.path]);
  }
  else {
    next(); 
  }
};


module.exports = {handleRedirects};
