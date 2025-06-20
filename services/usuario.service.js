import db from '../configs/db.js';
import bcrypt from 'bcrypt';

export const createUsuario = async ({ usuario, senha }) => {
  const hashedPassword = await bcrypt.hash(senha, 10);
  const [result] = await db.query(
    'INSERT INTO usuarios (usuario, senha) VALUES (?, ?)',
    [usuario, hashedPassword]
  );
  return { id: result.insertId, usuario };
};

export const getUsuarios = async () => {
  const [rows] = await db.query('SELECT id, usuario FROM usuarios');
  return rows;
};
