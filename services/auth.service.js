import db from '../configs/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const autenticarUsuario = async ({ usuario, senha }) => {
  const [rows] = await db.query('SELECT * FROM usuarios WHERE usuario = ?', [usuario]);
  const user = rows[0];

  if (!user) return null;

  const senhaValida = await bcrypt.compare(senha, user.senha);
  if (!senhaValida) return null;

  const token = jwt.sign({ id: user.id, usuario: user.usuario }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  });

  // Atualiza token no banco (pode ser útil para logout depois)
  await db.query('UPDATE usuarios SET token = ? WHERE id = ?', [token, user.id]);

  return { token };
};
