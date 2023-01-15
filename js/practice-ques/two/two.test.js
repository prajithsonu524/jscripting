const { digitCheckReg,digitCheckArrow } = require("./two.js");

test("check if all digits r same", () => {
  expect(digitCheckReg(22)).toBe(true);
})
test("check if all digits r same", () => {
  expect(digitCheckReg(23)).toBe(false);
})


test("check if all digits r same", () => {
    expect(digitCheckReg(22222)).toBe(true);
  })
  test("check if all digits r same", () => {
    expect(digitCheckReg(2333321)).toBe(false);
  })