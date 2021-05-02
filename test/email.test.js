const validatorEmail = require('../src/validEmail.js');
const emailExample = 'sonicdetenis1@gmail.com';

test('Validando o email', () => {
  expect(validatorEmail(emailExample)).toBe(false);
});