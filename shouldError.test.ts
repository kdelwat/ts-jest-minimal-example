import { expect } from "chai";

describe("TEST", () => {
  it("break because of the TypeScript strict compiler setting", async () => {
    const a = 1;
    expect(a).to.equal(1);
  });
});
