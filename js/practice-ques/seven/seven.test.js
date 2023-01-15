const { concatExceptFirstCharRegular,concatExceptFirstCharArrow } = require("./seven.js");

test("check concatenation of two strings", () => {
  expect(concatExceptFirstCharRegular(["code", "academy"])).toBe("odecademy");
})
test("check concatenation of two strings", () => {
  expect(concatExceptFirstCharRegular(["prajith", "aarya"])).toBe("rajitharya");
})

test("check concatenation of two strings", () => {
    expect(concatExceptFirstCharArrow(["code", "academy"])).toBe("odecademy");
  })
  test("check concatenation of two strings", () => {
    expect(concatExceptFirstCharArrow(["prajith", "aarya"])).toBe("rajitharya");
  })