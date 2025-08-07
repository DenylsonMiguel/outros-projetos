const express = require("express")
const app = express()
app.use(express.json())
const tarefas = [
  { id: 1, name: "Estudar Node", completed: false },
  { id: 2, name: "jogar bola domingo", completed: true },
]

app.get('/', (req, res) => {
  res.send("Bem vindo a API de tarefas")
})
app.get('/tarefas', (req, res) => {
  res.json(tarefas)
})
app.post('/tarefas', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ erro: "O campo name é obrigatorio"})
  }
  const novaTarefa = {
    id: tarefas.length + 1,
    name,
    completed: false
  }
  
  tarefas.push(novaTarefa)
  res.status(201).json(novaTarefa)
})

const port = 3000
app.listen(port, () => {
  console.log(`Server iniciado na porta ${port}`);
})