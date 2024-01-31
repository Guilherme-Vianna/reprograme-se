const express = require("express");
const app = express();
const port = 443;

app.get("/", (req, res) => {
  res.json("Bem vindo ao Servidor Web Utilizando Express!");
});

app.listen(port, () => {
  console.log("Servidor rodando");
});
