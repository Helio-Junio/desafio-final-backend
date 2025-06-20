import request from 'supertest';
import app from '../app.js';

describe('Testes do endpoint /usuarios', () => {
  it('Deve criar um novo usuário com sucesso', async () => {
    const resposta = await request(app).post('/usuarios').send({
      usuario: 'testeuser',
      senha: 'senha123'
    });
    expect(resposta.statusCode).toBe(201);
    expect(resposta.body).toHaveProperty('id');
  });

  it('Não deve criar usuário sem senha', async () => {
    const resposta = await request(app).post('/usuarios').send({
      usuario: 'invalido'
    });
    expect(resposta.statusCode).toBe(400);
  });
});
