const emailValidation = require('../src/validEmail.js');

test('Casos de email inválido: usuário menor que 1 caractere', () => {
  expect(emailValidation('s@gmail.com')).toBe(false);
});

test('Casos de email inválido: domínio menor que 3 caracteres (sem contar o ponto)', () => {
  expect(emailValidation('sonic@g.br')).toBe(false);
});

test('Casos de email inválido: domínio com acentuação inválida', () => {
  expect(emailValidation('sonic@gmãíl.com')).toBe(false);
});
test('Casos de email inválido: domínio com caractere inválido', () => {
  expect(emailValidation('sonic@gmail%.com')).toBe(false);
});

test('Casos de email inválido: usuário com caractere inválido', () => {
  expect(emailValidation('sônic%@gmail.com')).toBe(false);
});

test('Casos de email inválido: usuário com acentuação inválida', () => {
  expect(emailValidation('sônic@gmail.com')).toBe(false);
});

test('Casos de email inválido: mais de um @ no email', () => {
  expect(emailValidation('sonic@@gmail.com')).toBe(false);
});

test('Casos de email inválido: sem o ponto no domínio', () => {
  expect(emailValidation('sonic@gmailcom')).toBe(false);
});

test('Casos de email inválido: com mais de um ponto no domínio', () => {
  expect(emailValidation('sonic@gmail..com')).toBe(false);
});

test('Casos de email inválido: menos de um @ no email', () => {
  expect(emailValidation('sonicgmail.com')).toBe(false);
});

test('Casos de email inválido: domínio em letras maiúsculas', () => {
  expect(emailValidation('sonic@GMAIL.com')).toBe(false);
});

test('Casos de email válido: usuário maior que 1 caractere', () => {
  expect(emailValidation('us@dom.com')).toBe(true);
});

test('Casos de email válido: domínio maior que 3 caractere', () => {
  expect(emailValidation('us@d.net')).toBe(true);
});

test('Casos de email válido: usuário, domínio sem caracteres especiais e com o símbolo @ e com um ponto', () => {
  expect(emailValidation('user@domain.net')).toBe(true);
});

test('Casos de email válido: usuário com uma ou mais letras maiúsculas e minúsculas', () => {
  expect(emailValidation('user@domain.net')).toBe(true);
});

test('Casos de email válido: usuário com todas letras maiúsculas', () => {
  expect(emailValidation('user@domain.net')).toBe(true);
});