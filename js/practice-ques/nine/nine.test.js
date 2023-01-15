const { caesarCipherRegular,caesarCipherArrow } = require("./nine.js");

test("check caesar cipher", () => {
  expect(caesarCipherRegular("codeacademy")).toBe("dpefbdbefnz");
})
test("check caesar cipher", () => {
  expect(caesarCipherRegular("lazyinterns")).toBe("mbazjoufsot");
})
test("check caesar cipher", () => {
    expect(caesarCipherArrow("codeacademy")).toBe("dpefbdbefnz");
  })
  test("check caesar cipher", () => {
    expect(caesarCipherArrow("lazyinterns")).toBe("mbazjoufsot");
  })