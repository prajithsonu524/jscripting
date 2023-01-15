
const {InvCapArrow,InvCapReg}=require("./three.js")

test(" invert capitlization", ()=>{
    expect(InvCapReg("MeRRy hAD a LITTle lAMp")).toBe("mErrY Had A littLE LamP");
})

test("check reversing capitalization", () => {
    expect(InvCapReg("PRAJITHAARYA")).toBe("prajithaarya");
  })

test(" invert capitlization", ()=>{
    expect(InvCapArrow("MeRRy hAD a LITTle lAMp")).toBe("mErrY Had A littLE LamP");
})

test("check reversing capitalization", () => {
    expect(InvCapArrow("PRAJITHAARYA")).toBe("prajithaarya");
  })