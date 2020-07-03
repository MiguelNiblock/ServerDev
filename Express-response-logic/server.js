// EXAMPLE 4: Conditional response based on access control logic
// =============================================================

const express = require("express");
const app = express();

// this is stubbed. random-ishly returns true or false
const canAccessEndpoint = req => Boolean(Math.floor(Math.random() * 2));

app.get("/", (req, res) => {
  if (!canAccessEndpoint(req)) {
    console.log(
      `unauthorized request for ${req.originalUrl} by an anonymous intruder`
    );
    res.status(401).send("i won't let you");
  } else {
    res.send("ok");
  }
});

// listen for requests :)
app.listen(process.env.PORT, () =>
  console.log(`Your app is listening on port ${process.env.PORT}`)
);
