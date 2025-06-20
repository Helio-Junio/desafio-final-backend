import request from 'supertest';
import app from '../app.js';

describe('Testes do endpoint /clientes (protegido)', () => {
  let token = '';

  beforeAll(async () => {
    await request(app).post('/usuarios').send({ usuario: 'testejwt', senha: '123456' });
    const res = await request(app).post('/login').send({ usuario: 'testejwt', senha: '123456' });
    token = res.body.token;
  });

  it('Deve recusar acesso sem token', async () => {
    const res = await request(app).get('/clientes');
    expect(res.statusCode).toBe(401);
  });

  it('Deve acessar /clientes com token válido', async () => {
    const res = await request(app)
      .get('/clientes')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
  });

  it('Não deve aceitar token inválido', async () => {
    const res = await request(app)
      .get('/clientes')
      .set('Authorization', 'Bearer token_invalido');
    expect(res.statusCode).toBe(403);
  });
});
