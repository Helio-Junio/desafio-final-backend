import express from 'express';
import {
  listarClientes,
  criarCliente,
  atualizarCliente,
  deletarCliente
} from '../controllers/cliente.controller.js';

import { verificarToken } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.use(verificarToken);

router.get('/', listarClientes);
router.post('/', criarCliente);
router.put('/:id', atualizarCliente);
router.delete('/:id', deletarCliente);

export default router;
