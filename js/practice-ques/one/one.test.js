const { getLargestEvenRegular,getLargestEvenArrow } = require("./one.js");

test("test to get the largest even number", () => {
  expect(getLargestEvenRegular([1, 2, 3, 4, 5])).toBe(4);
})
test("test to get the largest even number", () => {
  expect(getLargestEvenRegular([1, 3, 5])).toBe(-1);
})

test("test to get the largest even number", () => {
    expect(getLargestEvenArrow([1, 2, 3, 4, 5])).toBe(4);
  })
  test("test to get the largest even number", () => {
    expect(getLargestEvenArrow([1, 3, 5])).toBe(-1);
  })