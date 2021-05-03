const validPassword = require('../src/validPassword.js');

//senhas inválidas
const passExample = '123#Li'; //com número, caractere especial, letra M with m, char < 8
const passExample2 = '123456m#'; //com número, caractere especial, letra m without M, char > 8
const passExample3 = '123456M#'; //com número, caractere especial, letra m without M, char > 8
const passExample4 = '123456Mn'; //com número, without caractere especial, letra m with M, char > 8
const passExample5 = '@passWORHARDD&%'; //without número, with caractere especial, letra m with M, char > 8
const passExample6 = '@passWORHARDD123 &%'; //with número, with caractere especial, letra m with M, char > 8 mas com espaços
const passExample7 = '@passWORHáRDD123&%'; //with número, with caractere especial, letra m with M, char > 8 mas com acentuações

test('Casos de senhas inválidas: com menos de 8 caracteres', () => {
  expect(validPassword(passExample)).toBe(false);
});

test('Casos de senhas inválidas: sem letra maiuscula', () => {
    expect(validPassword(passExample2)).toBe(false);
  });
  
test('Casos de senhas inválidas: sem letra minuscula', () => {
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

//senhas válidas

//const examplePass = '1234567#Li';
//const examplePass2 = '123456%#2SENHAValida'; 
//const examplePass3 = 'validissimoSenha129328$@1!@'; 
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