import db from '../configs/db.js';

export const listarProdutos = async () => {
  const [rows] = await db.query('SELECT * FROM produtos');
  return rows;
};

export const criarProduto = async (produto) => {
  const { nome, descricao, preco, data_atualizado } = produto;
  const [result] = await db.query(
    'INSERT INTO produtos (nome, descricao, preco, data_atualizado) VALUES (?, ?, ?, ?)',
    [nome, descricao, preco, data_atualizado]
  );
  return { id: result.insertId, ...produto };
};

export const atualizarProduto = async (id, produto) => {
  const { nome, descricao, preco, data_atualizado } = produto;
  await db.query(
    'UPDATE produtos SET nome = ?, descricao = ?, preco = ?, data_atualizado = ? WHERE id = ?',
    [nome, descricao, preco, data_atualizado, id]
  );
  return { id, ...produto };
};

export const deletarProduto = async (id) => {
  await db.query('DELETE FROM produtos WHERE id = ?', [id]);
};
