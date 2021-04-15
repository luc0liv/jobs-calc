const express = require("express")//pegar o express e coloca numa constante, faz o require do express;
const server = express() //executando a função express
const routes = require("./routes.js")

//habilitar arquivos estáticos
server.use(express.static("public")) //o 'use' serve para adicionar configurações ao seu servidor

server.use(routes)

server.listen(3000, () => console.log("running..."));
