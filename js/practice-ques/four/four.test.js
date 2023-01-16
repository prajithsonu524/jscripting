const {longestString,longestStringArrow}=require('./four.js');
test('checking to get longest string from array', () => {
  expect(longestString(['we', 'love', 'code', 'academy'])).toBe('academy');
});
  
test('checking to get longest string from array', () => {
  expect(longestString(['we', 'love', 'code'])).toBe('love');
});
test('checking to get longest string from array', () => {
  expect(longestStringArrow(['we', 'love', 'code', 'academy'])).toBe('academy');
});
  
test('checking to get longest string from array', () => {
  expect(longestStringArrow(['we', 'love', 'code'])).toBe('love');
});