const validPassword = require('../src/validPassword.js');

const passExample = '123#Li';
const passExample2 = '123456m#'; 
const passExample3 = '123456M#';
const passExample4 = '123456Mn'; 
const passExample5 = '@passWORHARDD&%'; 
const passExample6 = '@passWORHARDD123 &%'; 
const passExample7 = '@passWORHáRDD123&%'; 

test('Casos de senhas inválidas: com menos de 8 caracteres', () => {
  expect(validPassword(passExample)).toBe(false);
});

test('Casos de senhas inválidas: sem letra maiúscula', () => {
    expect(validPassword(passExample2)).toBe(false);
  });
  
test('Casos de senhas inválidas: sem letra minúscula', () => {
    expect(validPassword(passExample3)).toBe(false);
});

test('Casos de senhas inválidas: sem caractere especial', () => {
    expect(validPassword(passExample4)).toBe(false);
});

test('Casos de senhas inválidas: sem número', () => {
    expect(validPassword(passExample5)).toBe(false);
});

test('Casos de senhas inválidas: com espaços', () => {
    expect(validPassword(passExample6)).toBe(false);
});

test('Casos de senhas inválidas: com acentuações', () => {
    expect(validPassword(passExample7)).toBe(false);
});

const examplePass = '#Romu123';
const examplePass2 = 'Isa456#$'; 
const examplePass3 = 'R@pha789'; 

test('Casos de senhas Válidas: primeiro caso', () => {
    expect(validPassword(examplePass)).toBe(true);
});

test('Casos de senhas Válidas: segundo caso', () => {
    expect(validPassword(examplePass2)).toBe(true);
});

test('Casos de senhas Válidas: terceiro caso', () => {
    expect(validPassword(examplePass3)).toBe(true);
});