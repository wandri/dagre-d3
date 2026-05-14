import dagreD3 from "../dist/dagre-d3.cjs.js";
import dagreD3Browser from "../dist/dagre-d3.cjs.js";

describe("built bundles", () => {
  it("loads the CommonJS bundle", () => {
    expect(dagreD3.render).toBeTypeOf("function");
  });

  it("keeps direct CommonJS-compatible exports", () => {
    expect(dagreD3Browser.render).toBeTypeOf("function");
    expect(dagreD3Browser.graphlib).toBeTypeOf("object");
  });
});
