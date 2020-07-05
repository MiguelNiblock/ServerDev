const express = require("express");
const app = express();

// your code here!

app.get('/echo/:what',(req,res) => {
  
  const { what } = req.params;
  
  const logObj = {
  time: new Date().toTimeString(),
  method: req.method,
  hostname: req.hostname,
  path: req.path,
  "content type": req.get("Content-Type"),
  query: req.query,
  body: req.body,
  what: what
    
  };
  
  res.send(logObj);
  
})





app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
