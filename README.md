# 🧠 Desafio Final – Desenvolvimento Back-end II

Projeto desenvolvido como desafio final da disciplina **Desenvolvimento Back-end II** com Node.js e MySQL.

## ✅ Funcionalidades Implementadas

- API RESTful com Node.js + Express
- Banco de dados MySQL
- Autenticação com JWT
- CRUD completo para:
  - Usuários (com hash de senha)
  - Clientes (com cache + JWT obrigatório)
  - Produtos (público)
- Cache com invalidação automática (`node-cache`)
- Middleware de autenticação
- Testes automatizados com Jest e Supertest
- Interface Web com HTML5, CSS3 e JavaScript puro

---

## 🚀 Como rodar o projeto

### 📦 Requisitos

- Node.js instalado
- MySQL rodando
- Git (opcional)



### 📁 Clone o repositório

```bash
git clone https://github.com/seu-usuario/desafio-final-backend.git
cd desafio-final-backend
```
### ⚙️ Configure o ambiente
DB_HOST=localhost  
DB_USER=root  
DB_PASSWORD=suasenha  
DB_NAME=desafio_final  
PORT=3000  
JWT_SECRET=seu_token_secreto  

### 🗄️ Crie o banco de dados
CREATE DATABASE desafio_final;  
USE desafio_final;  

CREATE TABLE usuarios (  
  id INT AUTO_INCREMENT PRIMARY KEY,  
  usuario VARCHAR(255),  
  senha VARCHAR(255),  
  token VARCHAR(500)  
);

CREATE TABLE clientes (  
  id INT AUTO_INCREMENT PRIMARY KEY,  
  nome VARCHAR(255),  
  sobrenome VARCHAR(255),  
  email VARCHAR(255),  
  idade INT  
);

CREATE TABLE produtos (  
  id INT AUTO_INCREMENT PRIMARY KEY,  
  nome VARCHAR(255),  
  descricao VARCHAR(255),  
  preco DECIMAL(10,2),  
  data_atualizado DATETIME  
);

### 📦 Instale as dependências
npm install

### ▶️ Inicie o servidor
npm run dev

A API ficará disponível em:
📡 http://localhost:3000

## 💻 Frontend Web

frontend/  
├── index.html  
├── login.html  
├── logout.html  
├── produtos.html  
├── clientes.html  
├── usuarios.html  
├── js/  
│   └── app.js  
└── css/  
    └── style.css  

## 📝 Endpoints da API  
GET / ❌ Status da API 
POST /login ❌ Login e geração de token 
POST /logout ❌ Logout do token (não ativo) 
GET /usuarios ✅ Listar usuários (PROTEGIDO) 
POST /usuarios ❌ Criar novo usuário 
GET /produtos ❌ Listar produtos 
POST /produtos ❌ Criar produto 
GET /clientes ✅ Listar clientes (com cache, PROTEGIDO) 
POST /clientes ✅ Criar cliente (invalida cache, PROTEGIDO) 
PUT /clientes/:id ✅ Atualizar cliente (PROTEGIDO) 
DELETE /clientes/:id ✅ Deletar cliente (PROTEGIDO)
---

## 👨‍🏫 Professor
Luccas Rafael  
📧 luccasrm@unilavras.edu.br
---
## 🏁 Créditos
Desenvolvido por: 
*Hélio Ferreira*  
*Guilherme Salatiel*  
*Oscar Lara*  
