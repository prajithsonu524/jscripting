const { countVowel,countVowelArrow } = require('./eight.js');

test('check the vowel count function', () => {
  expect(countVowel('codeacademy')).toBe(5);
});
test('check the vowel count function', () => {
  expect(countVowel('prison mike')).toBe(4);
});

test('check the vowel count function', () => {
  expect(countVowelArrow('codeacademy')).toBe(5);
});
test('check the vowel count function', () => {
  expect(countVowelArrow('prison mike')).toBe(4);
});