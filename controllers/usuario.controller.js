import * as UsuarioService from '../services/usuario.service.js';

export const criarUsuario = async (req, res) => {
  try {
    const { usuario, senha } = req.body;
    if (!usuario || !senha) return res.status(400).json({ erro: 'Usuário e senha são obrigatórios' });

    const novoUsuario = await UsuarioService.createUsuario({ usuario, senha });
    res.status(201).json(novoUsuario);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar usuário', detalhes: err.message });
  }
};

export const listarUsuarios = async (_req, res) => {
  try {
    const usuarios = await UsuarioService.getUsuarios();
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar usuários', detalhes: err.message });
  }
};
