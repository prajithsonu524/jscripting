const {checkLeap,checkLeapArrow } =require("./five.js")

test("check for leap year", () => {
    expect(checkLeap(2000)).toBe(true);
  })
  test("check for leap year", () => {
    expect(checkLeap(1800)).toBe(false);
  })

  test("check for leap year", () => {
    expect(checkLeapArrow(2020)).toBe(true);
  })
  test("check for leap year", () => {
    expect(checkLeapArrow(1807)).toBe(false);
  })
  