import express from "express";
import livrosController from "../controllers/LivrosController.js";

const router = express.Router()

router
    .get('/livros', livrosController.listarLivros)
    .get('/livros/busca', livrosController.burcarPorEditora)
    .get('/livros/:id', livrosController.listarLivroPorID)
    .post('/livros', livrosController.cadastrarLivro)
    .put('/livros/:id', livrosController.atualizarLivro)
    .delete('/livros/:id', livrosController.deletarLivro)



export default router