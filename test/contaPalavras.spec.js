const lab = require('lab');
const lab= exports.lab = Lab.script();

const { expect } = require('code');

const {contaPalavras} = require('../app/contaPalavras');

lab.experiment('Teste com 2 palavras', () => {
  lab.test('Deve retornar 2', (done) => {
  expect(contaPalavras("Olá tudo")).to.qual({quantidade:2 });
  done();
 });
});
