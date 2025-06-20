import express from 'express';
import {
  listarProdutos,
  criarProduto,
  atualizarProduto,
  deletarProduto
} from '../controllers/produto.controller.js';

const router = express.Router();

router.get('/', listarProdutos);
router.post('/', criarProduto);
router.put('/:id', atualizarProduto);
router.delete('/:id', deletarProduto);

export default router;
