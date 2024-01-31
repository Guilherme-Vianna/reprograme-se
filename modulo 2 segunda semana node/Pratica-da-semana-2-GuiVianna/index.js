const express = require("express");
const app = express();
const port = 443;

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/p1", function(req, res) {
  res.sendFile(__dirname + "/public/p1.html");
});

app.get("/p2", function(req, res) {
  res.sendFile(__dirname + "/public/p2.html");
});

app.get("/p3", function(req, res) {
  res.sendFile(__dirname + "/public/p3.html");
});


app.listen(port, () => {
  console.log("Server Running");
});
