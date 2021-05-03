const emailValidation = require('../src/validEmail.js');

const emailExample = 's@gmail.com';
const emailExample1 = 'sonic@g.br';
const emailExample2 = 'sônic@gmail.com';
const emailExample3 = 'sonic@gmail%.com';
const emailExample4 = 'sonic@@gmail.com';
const emailExample5 = 'sonic@gmailcom';
const emailExample6 = 'sonic@gmail..com';
const emailExample7 = 'sonicgmail..com';
const emailExample8 = 'sonic@GMAIL.com';


test('Casos de email inválido: usuário menor que 1 caractere', () => {
  expect(emailValidation(emailExample)).toBe(false);
});

test('Casos de email inválido: domínio menor que 3 caracteres (sem contar o ponto)', () => {
  expect(emailValidation(emailExample1)).toBe(false);
});

test('Casos de email inválido: domínio com caractere inválido', () => {
  expect(emailValidation(emailExample2)).toBe(false);
});

test('Casos de email inválido: usuário com caractere inválido', () => {
  expect(emailValidation(emailExample3)).toBe(false);
});

test('Casos de email inválido: mais de um @ no email', () => {
  expect(emailValidation(emailExample4)).toBe(false);
});

test('Casos de email inválido: sem o ponto no domínio', () => {
  expect(emailValidation(emailExample5)).toBe(false);
});

test('Casos de email inválido: com mais de um ponto no domínio', () => {
  expect(emailValidation(emailExample6)).toBe(false);
});

test('Casos de email inválido: menos de um @ no email', () => {
  expect(emailValidation(emailExample7)).toBe(false);
});

test('Casos de email inválido: domínio em letras maiúsculas', () => {
  expect(emailValidation(emailExample8)).toBe(false);
});


const exampleEmail = 'us@dom.com';
const exampleEmail2 = 'us@d.net';
const exampleEmail3 = 'user@domain.net';
const exampleEmail4 = 'user@domain.net';
const exampleEmail5 = 'user@domain.net';

test('Casos de email válido: usuário maior que 1 caractere', () => {
  expect(emailValidation(exampleEmail)).toBe(true);
});

test('Casos de email válido: domínio maior que 3 caractere', () => {
  expect(emailValidation(exampleEmail2)).toBe(true);
});

test('Casos de email válido: usuário, domínio sem caracteres especiais e com o símbolo @ e com um ponto', () => {
  expect(emailValidation(exampleEmail3)).toBe(true);
});

test('Casos de email válido: usuário com uma ou mais letras maiúsculas e minúsculas', () => {
  expect(emailValidation(exampleEmail4)).toBe(true);
});

test('Casos de email válido: usuário com todas letras maiúsculas', () => {
  expect(emailValidation(exampleEmail5)).toBe(true);
});