const express = require('express');

const server = express();
server.use(express.json());

let countReq = 0;
const projetos = [{
  "id": "1",
  "title": "teste1",
  "tasks": []
}, {
  "id": "2",
  "title": "teste2",
  "tasks": []
}, {
  "id": "3",
  "title": "teste3",
  "tasks": []
},];

server.use((req, res, next) => {
  countReq++;
  console.log("Requisições: " + countReq);
  // console.count("Requisições");
  next();
});

// Adiciona um projeto, com um id e title
server.post('/projects', (req, res) => {
  const { id, title } = req.body;
  const projeto = {
    id,
    title,
    tasks: []
  }

  projetos.push(projeto);
  return res.json(projeto);
});

// Retorna todos os projetos
server.get('/projects', (req, res) => {
  return res.json(projetos);
});

//Altera valor do title
server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;

  projetos.map(value => {
    if (value.id == id) {
      value.title = nome;
    }
  })

  return res.send("Alterado com sucesso");
});

//Deleta um projeto
server.delete('/projects/:id', (req, res) => {
  const { id } = req.params;

  projetos.map((value, index) => {
    if (value.id == id) {
      projetos.splice(index, 1);
    }
  })

  return res.send("Deletado com sucesso");
});

//Adiciona uma task 
server.post('/projects/:id/tasks', (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  projetos.map((value) => {
    if (value.id == id) {
      value.tasks.push(task);
    }
  })

  return res.send("Task Adicionada com sucesso");
});

server.listen('3333');