const express = require('express');
const app = express();

app.get("/notes", function(req,res) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // or "*"
  res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
  let notes = [
    {text: "First note"},
    {text: "Second note"},
    {text: "Third note"},
    {text: "Bububu"},
    {text: "Full List"},
    {text: "One more"}
  ]
  res.send(notes);
});
app.listen(8080);

