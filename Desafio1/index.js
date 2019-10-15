const express = require('express');

const server = express();
server.use(express.json());

const projetos = [];

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

server.get('/projects', (req, res) => {
  return res.json(projetos);
});

server.listen('3333');