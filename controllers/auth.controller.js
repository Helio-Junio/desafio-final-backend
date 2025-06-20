import * as AuthService from '../services/auth.service.js';

export const login = async (req, res) => {
  const { usuario, senha } = req.body;

  if (!usuario || !senha) {
    return res.status(400).json({ erro: 'Usuário e senha são obrigatórios' });
  }

  const resultado = await AuthService.autenticarUsuario({ usuario, senha });

  if (!resultado) {
    return res.status(401).json({ erro: 'Credenciais inválidas' });
  }

  res.status(200).json({ token: resultado.token });
};
