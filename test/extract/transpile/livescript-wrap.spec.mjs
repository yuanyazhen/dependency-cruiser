import { expect } from "chai";
import wrap from "../../../src/extract/transpile/livescript-wrap.js";

describe("livescript transpiler", () => {
  it("tells the livescript transpiler is not available", () => {
    expect(wrap.isAvailable()).to.equal(false);
  });
});
