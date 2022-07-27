import express from "express";
import autoresController from "../controllers/AutoresController.js";


const router = express.Router()

router
    .get('/autores', autoresController.listarAutores)
    .get('/autores/:id', autoresController.listarAutorPorID)
    .post('/autores', autoresController.cadastrarAutor)
    .put('/autores/:id', autoresController.atualizarAutor)
    .delete('/autores/:id', autoresController.deletarAutor)



export default router