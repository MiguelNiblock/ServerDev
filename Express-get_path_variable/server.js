// EXAMPLE 3: Path variables
// =========================

// import express
const express = require("express");
// init a new express app
const app = express();

// typically, this kind of data will live in a database layer, separate
// from the server.js file. You'll learn about the database layer later
// on, so for now we've included the data in-memory.
const studentData = [
  {
    studentId: "1546906",
    studentName: "Sally Student",
    currentGrade: "A"
  },
  {
    studentId: "2300457",
    studentName: "Thaddeus Think",
    currentGrade: "A"
  },
  {
    studentId: "9920711",
    studentName: "Jason Javascript",
    currentGrade: "B"
  }
];

// the user would actually make a request
// to one of the IDs, like `/9920711`. `studentId`
// is accessible in the `req.params` object.
app.get("/:studentId", (req, res) => {
  // use destructuring assignment to assign `req.params.studentId`
  // to its own variable
  const { studentId } = req.params;
  let requestedData;
  // loop through studentData to find a matching studentId
  for (let i = 0; i < studentData.length; i++) {
    if (studentData[i].studentId === studentId) {
      requestedData = studentData[i];
    }
  }
  // send the data matching the requested studentId
  res.json(requestedData);
});

// listen for requests :)
app.listen(process.env.PORT, () =>
  console.log(`Your app is listening on port ${process.env.PORT}`)
);
