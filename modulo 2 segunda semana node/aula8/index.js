const http = require("http");
const port = 443;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url == "/") {
    res.write("<h1> Seja bem vindo! </h1>");
  } else if (req.url == "/server") {
    res.write("<h1>Server</h1>");
  } else if (req.url == "/server/node") {
    res.write("<h1>Server Web no Node</h1>");
  } else {
    res.write("<h1>PADRAO</h1>");
  }
  res.end()
});

server.listen(port, () => {
  console.log("Servidor rodando!");
});
