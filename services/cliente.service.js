import db from '../configs/db.js';

export const listarClientes = async () => {
  const [rows] = await db.query('SELECT * FROM clientes');
  return rows;
};

export const criarCliente = async (cliente) => {
  const { nome, sobrenome, email, idade } = cliente;
  const [result] = await db.query(
    'INSERT INTO clientes (nome, sobrenome, email, idade) VALUES (?, ?, ?, ?)',
    [nome, sobrenome, email, idade]
  );
  return { id: result.insertId, ...cliente };
};

export const atualizarCliente = async (id, cliente) => {
  const { nome, sobrenome, email, idade } = cliente;
  await db.query(
    'UPDATE clientes SET nome = ?, sobrenome = ?, email = ?, idade = ? WHERE id = ?',
    [nome, sobrenome, email, idade, id]
  );
  return { id, ...cliente };
};

export const deletarCliente = async (id) => {
  await db.query('DELETE FROM clientes WHERE id = ?', [id]);
};
