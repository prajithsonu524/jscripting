const { ScriptEndRegular,ScriptEndArrow } = require("./six.js");

test("check for string ending with Script", () => {
  expect(ScriptEndRegular("javaScript")).toBe(true);
})
test("check for string ending with Script", () => {
  expect(ScriptEndRegular("javascript")).toBe(false);
})
test("check for string ending with Script", () => {
  expect(ScriptEndRegular("axe")).toBe(false);
})

test("check for string ending with Script", () => {
    expect(ScriptEndArrow("javaScript")).toBe(true);
  })
  test("check for string ending with Script", () => {
    expect(ScriptEndArrow("javascript")).toBe(false);
  })
  test("check for string ending with Script", () => {
    expect(ScriptEndArrow("axe")).toBe(false);
  })