"use strict";

// Request and response object drills
// ==================================

const express = require("express");
const app = express();

// use express middleware to parse the request body and add it to the request object
// don't worry, you'll learn all about middleware in the next assignment!
app.use(express.json());

// your code here.

app.get('/',(req,res) => {
    
  res.send(`
    There's a ${req.body.adjective1} new ${req.body.name} in ${req.body.place} and everyone's talking. Stunningly ${req.body.adjective2} and ${req.body.adverb} ${req.body.adjective3}, all the cool kids know it. However, ${req.body.name} has a secret - ${req.body.name}'s a vile vampire.

    Will it end with a bite, or with a stake through the ${req.body.noun}?
`)
  
  
})


// hint: in Postman under Body remember to select JSON instead of Text, then try doing
// console.log(req.body) here to show your key-value pairs from Postman in the Logs

// listen for requests :)
app.listen(process.env.PORT, () =>
  console.log(`Your app is listening on port ${process.env.PORT}`)
);
