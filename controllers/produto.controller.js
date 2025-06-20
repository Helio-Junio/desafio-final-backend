import * as ProdutoService from '../services/produto.service.js';

export const listarProdutos = async (_req, res) => {
  try {
    const produtos = await ProdutoService.listarProdutos();
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar produtos', detalhes: err.message });
  }
};

export const criarProduto = async (req, res) => {
  try {
    const produto = req.body;
    const novo = await ProdutoService.criarProduto(produto);
    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar produto', detalhes: err.message });
  }
};

export const atualizarProduto = async (req, res) => {
  try {
    const id = req.params.id;
    const produto = req.body;
    const atualizado = await ProdutoService.atualizarProduto(id, produto);
    res.json(atualizado);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar produto', detalhes: err.message });
  }
};

export const deletarProduto = async (req, res) => {
  try {
    const id = req.params.id;
    await ProdutoService.deletarProduto(id);
    res.json({ mensagem: 'Produto deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao deletar produto', detalhes: err.message });
  }
};
