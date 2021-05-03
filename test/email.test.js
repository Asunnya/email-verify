const validatorEmail = require('../src/validEmail.js');

const emailExample = 's@gmail.com';

const emailExample1 = 'sonic@g.br';

const emailExample2 = 'sônic@gmail.com';

const emailExample3 = 'sonic@gmail%.com';

const emailExample4 = 'sonic@@gmail.com';

const emailExample5 = 'sonic@gmailcom';

const emailExample6 = 'sonic@gmail..com';

const emailExample7 = 'sonicgmail..com';

test('Casos de email inválido: Usuário menor que 1 caractere', () => {
  expect(validatorEmail(emailExample)).toBe(false);
});

test('Casos de email inválido: domínio menor que 3 caractere (sem conta o ponto)', () => {
  expect(validatorEmail(emailExample1)).toBe(false);
});

test('Casos de email inválido: domínio com caractere inválido', () => {
  expect(validatorEmail(emailExample2)).toBe(false);
});
test('Casos de email inválido: usuário com caractere inválido', () => {
  expect(validatorEmail(emailExample3)).toBe(false);
});

test('Casos de email inválido: mais de um @ no email', () => {
  expect(validatorEmail(emailExample4)).toBe(false);
});

test('Casos de email inválido: sem o ponto no domínio', () => {
  expect(validatorEmail(emailExample5)).toBe(false);
});

test('Casos de email inválido: com mais de um ponto no domínio', () => {
  expect(validatorEmail(emailExample6)).toBe(false);
});

test('Casos de email inválido: menos de um @ no email', () => {
  expect(validatorEmail(emailExample7)).toBe(false);
});

/*Para o email, deve ter as seguintes regras de negócio:
● O tamanho do usuário deve ser maior que 1 caractere.
● O tamanho do domínio deve ser maior que 3 caracteres.
● O usuário e domínio devem ser separados pelo símbolo @.
● Tanto o usuário, quanto o domínio não devem possuir acentuações, espaços em
branco ou caracteres especiais, como: #, $, %, etc.
● O domínio deve conter pelo menos um ponto. Exemplos: domain.com, domain.net,
domain.com.br, domain.org, etc.
*/

const exampleEmail = 'us@dom.com';
const exampleEmail2 = 'us@d.net';
const exampleEmail3 = 'usario@domain.net';

test('Casos de email válido: usuário maior que 1 caractere', () => {
  expect(validatorEmail(exampleEmail)).toBe(true);
});

test('Casos de email válido: domínio maior que 3 caractere', () => {
  expect(validatorEmail(exampleEmail2)).toBe(true);
});

test('Casos de email válido: usuário, dominio sem caracteres especiais e com o símbolo @ e com um ponto', () => {
  expect(validatorEmail(exampleEmail3)).toBe(true);
});