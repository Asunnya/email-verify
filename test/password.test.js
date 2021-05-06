const validPassword = require('../src/validPassword.js');

test('Casos de senhas inválidas: com menos de 8 caracteres', () => {
  expect(validPassword('123#Li')).toBe(false);
});

test('Casos de senhas inválidas: sem letra maiúscula', () => {
    expect(validPassword('123456m#')).toBe(false);
  });
  
test('Casos de senhas inválidas: sem letra minúscula', () => {
    expect(validPassword('123456M#')).toBe(false);
});

test('Casos de senhas inválidas: sem caractere especial', () => {
    expect(validPassword('123456Mn')).toBe(false);
});

test('Casos de senhas inválidas: sem número', () => {
    expect(validPassword('@passWORHARDD&%')).toBe(false);
});

test('Casos de senhas inválidas: com espaços', () => {
    expect(validPassword('@passWORHARDD123 &%')).toBe(false);
});

test('Casos de senhas inválidas: com acentuações', () => {
    expect(validPassword('@passWORHáRDD123&%')).toBe(false);
});

test('Casos de senhas Válidas: primeiro caso', () => {
    expect(validPassword('#Romu123')).toBe(true);
});

test('Casos de senhas Válidas: segundo caso', () => {
    expect(validPassword('Isa456#$')).toBe(true);
});

test('Casos de senhas Válidas: terceiro caso', () => {
    expect(validPassword('R@pha789')).toBe(true);
});