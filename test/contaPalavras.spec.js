const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { contaPalavras } = require('../app/contaPalavras');

lab.experiment('Teste com 2 palavras', () => {
  lab.test('Deve retornar 2', (done) => {
  expect(contaPalavras("ola tudo")).to.equal({quantidade: 2 });
  done();
  });
});
