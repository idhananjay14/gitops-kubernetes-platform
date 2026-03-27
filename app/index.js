const express = require('express')
const app = express()
app.use(express.json())

let tasks = []
let id = 1

app.get('/health', (req, res) => {
  res.json({ status: 'OK', uptime: process.uptime() })
})

app.get('/tasks', (req, res) => {
  res.json(tasks)
})

app.post('/tasks', (req, res) => {
  const task = { id: id++, title: req.body.title, done: false }
  tasks.push(task)
  res.json(task)
})

app.delete('/tasks/:id', (req, res) => {
  tasks = tasks.filter(t => t.id !== parseInt(req.params.id))
  res.json({ message: 'deleted' })
})

app.listen(3000, () => console.log('TaskFlow running on port 3000'))
