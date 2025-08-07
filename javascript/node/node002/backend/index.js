const http = require("http")
const server = http.createServer((req, res) => {
  console.log("Request recebida:", req.url)
  res.setHeader("Content-Type", "text/plain; charset=utf-8")
  res.setHeader("Access-Control-Allow-Origin", "*")
  if (req.url === "/") {
    res.end("Informe qual horario")
    console.log("Acessaram o main")
  } else if (req.url === "/dia") {
    res.end("Bom dia")
    console.log("Acessaram o dia")
  } else if (req.url === "/tarde") {
    res.end("Boa tarde")
    console.log("Acessaram a tarde")
  } else if (req.url === "/noite") {
    res.end("Boa noite")
    console.log("Acessaram a noite")
  } else {
    res.end("Informe uma rota válida")
  }
})

const port = 3000

server.listen(port, () => {
  console.log(`Server iniciado na porta ${port}`)
  console.log(`Acesse: http://localhost:${port}/`)
})