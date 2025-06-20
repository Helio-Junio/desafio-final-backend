import * as ClienteService from '../services/cliente.service.js';
import cache from '../configs/cache.js';

export const listarClientes = async (req, res) => {
  try {
    const cacheKey = 'clientes';
    if (cache.has(cacheKey)) {
      console.log('✅ [CACHE] Clientes');
      return res.json(cache.get(cacheKey));
    }

    const clientes = await ClienteService.listarClientes();
    cache.set(cacheKey, clientes);
    console.log('🗃️ [BANCO] Clientes');
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar clientes', detalhes: err.message });
  }
};

export const criarCliente = async (req, res) => {
  try {
    const cliente = req.body;
    const novo = await ClienteService.criarCliente(cliente);
    cache.del('clientes'); // Invalida cache
    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar cliente', detalhes: err.message });
  }
};

export const atualizarCliente = async (req, res) => {
  try {
    const id = req.params.id;
    const cliente = req.body;
    const atualizado = await ClienteService.atualizarCliente(id, cliente);
    cache.del('clientes'); // Invalida cache
    res.json(atualizado);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar cliente', detalhes: err.message });
  }
};

export const deletarCliente = async (req, res) => {
  try {
    const id = req.params.id;
    await ClienteService.deletarCliente(id);
    cache.del('clientes'); // Invalida cache
    res.json({ mensagem: 'Cliente deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao deletar cliente', detalhes: err.message });
  }
};
