import express from 'express';
import { criarUsuario, listarUsuarios } from '../controllers/usuario.controller.js';

const router = express.Router();

router.post('/', criarUsuario);
router.get('/', listarUsuarios);

export default router;