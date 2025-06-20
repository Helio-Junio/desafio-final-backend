import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import usuarioRoutes from './routes/usuarios.routes.js';
import authRoutes from './routes/auth.routes.js';
import clienteRoutes from './routes/clientes.routes.js';
import produtoRoutes from './routes/produtos.routes.js';

const app = express();
app.use(cors());

// ✅ Middleware necessário ANTES das rotas
app.use(express.json());

app.get('/', (req, res) => {
  res.send('🚀 API online! Bem-vindo ao Desafio Final!');
});

// Rotas
app.use('/usuarios', usuarioRoutes);
app.use('/', authRoutes); // Inclui /login
app.use('/clientes', clienteRoutes); // Inclui /clientes
app.use('/produtos', produtoRoutes); // Inclui /produtos <-- Sem autenticação

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

export default app;
