import * as d3 from "d3";
import dagreD3 from "../index";

describe("dagreD3", () => {
  let svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>;
  let g: any;

  beforeEach(() => {
    svg = d3.select("body").append("svg");
    g = new dagreD3.graphlib.Graph()
      .setGraph({})
      .setDefaultNodeLabel(() => ({}))
      .setDefaultEdgeLabel(() => ({}));
  });

  afterEach(() => {
    svg.remove();
    document.body.innerHTML = "";
  });

  describe("exports", () => {
    ["graphlib", "dagre", "intersect", "util"].forEach((lib) => {
      it(lib, () => {
        expect(dagreD3[lib as keyof typeof dagreD3]).toBeTypeOf("object");
      });
    });

    it("render", () => {
      expect(dagreD3.render).toBeTypeOf("function");
    });

    it("version", () => {
      expect(dagreD3.version).toBeTypeOf("string");
    });
  });

  describe("DOM elements", () => {
    it("are created for each node", () => {
      g.setNode("a", { id: "a" });
      g.setNode("b", { id: "b" });
      dagreD3.render()(svg, g);

      expect(d3.select("#a").datum()).toEqual("a");
      expect(d3.select("#b").datum()).toEqual("b");

      // We should also be able to get to the element from the node object.
      expect(g.node("a").elem).toEqual(d3.select("#a").node());
      expect(g.node("b").elem).toEqual(d3.select("#b").node());
    });

    it("are created for each node label", () => {
      g.setNode("a", { labelId: "a-lab" });
      g.setNode("b", { labelId: "b-lab" });
      dagreD3.render()(svg, g);

      expect(d3.select("#a-lab").datum()).toEqual("a");
      expect(d3.select("#b-lab").datum()).toEqual("b");
    });

    it("are created for each edge", () => {
      g.setNode("a", {});
      g.setNode("b", {});
      g.setEdge("a", "b", { id: "ab" });
      dagreD3.render()(svg, g);

      expect(d3.select("#ab").datum()).toEqual({ v: "a", w: "b" });

      // We should also be able to get to the element from the edge object.
      expect(g.edge("a", "b").elem).toEqual(d3.select("#ab").node());
    });

    it("preserve link to the elem even after re-rendering", () => {
      g.setNode("a", {});
      g.setNode("b", {});
      g.setEdge("a", "b", { id: "ab" });
      dagreD3.render()(svg, g);

      // Remove elem from edge object and re-render
      g.setEdge("a", "b", { id: "ab" });
      dagreD3.render()(svg, g);

      expect(g.edge("a", "b").elem).toEqual(d3.select("#ab").node());
    });

    it("are created for each edge label", () => {
      g.setNode("a", {});
      g.setNode("b", {});
      g.setEdge("a", "b", { labelId: "ab-lab" });
      dagreD3.render()(svg, g);

      expect(d3.select("#ab-lab").datum()).toEqual({ v: "a", w: "b" });
    });
  });

  it("uses node's width and height if specified", () => {
    g.setNode("a", { id: "a", width: 1000, height: 2000, padding: 0 });
    dagreD3.render()(svg, g);

    expect(Math.round((d3.select("#a").node() as SVGGraphicsElement).getBBox().width)).toEqual(1000);
    expect(Math.round((d3.select("#a").node() as SVGGraphicsElement).getBBox().height)).toEqual(2000);
  });

  it("does not grow node dimensions when re-rendering", () => {
    g.setNode("a", { id: "a" });
    dagreD3.render()(svg, g);
    const bbox = (svg.select("#a rect").node() as SVGGraphicsElement).getBBox();

    dagreD3.render()(svg, g);
    const bbox2 = (svg.select("#a rect").node() as SVGGraphicsElement).getBBox();

    expect(bbox.width).toEqual(bbox2.width);
    expect(bbox.height).toEqual(bbox2.height);
  });

  it("does not grow edge dimensions when re-rendering", () => {
    g.setNode("a");
    g.setNode("b");
    g.setEdge("a", "b", { labelId: "ab", label: "foo" });
    dagreD3.render()(svg, g);
    const bbox = (svg.select("#ab").node() as SVGGraphicsElement).getBBox();

    dagreD3.render()(svg, g);
    const bbox2 = (svg.select("#ab").node() as SVGGraphicsElement).getBBox();

    expect(bbox.width).toEqual(bbox2.width);
    expect(bbox.height).toEqual(bbox2.height);
  });

  describe("HTML labels", () => {
    it("can be created for a node", () => {
      g.setNode("a", { labelType: "html", label: "<p id='a-lab'>Hello</p>" });
      dagreD3.render()(svg, g);

      expect(d3.select("#a-lab").empty()).toBe(false);
      expect(d3.select("#a-lab").text()).toEqual("Hello");
    });

    it("can use an existing DOM element", () => {
      const elem = document.createElement("p");
      elem.setAttribute("id", "a-lab");
      elem.innerHTML = "Hello";

      g.setNode("a", { id: "a", labelType: "html", label: elem });
      dagreD3.render()(svg, g);

      expect(d3.select("#a #a-lab").empty()).toBe(false);
      expect(d3.select("#a #a-lab").text()).toEqual("Hello");
    });

    it("can use an function that returns a DOM element", () => {
      const elem = document.createElement("p");
      elem.setAttribute("id", "a-lab");
      elem.innerHTML = "Hello";

      g.setNode("a", { id: "a", labelType: "html", label: () => { return elem; } });
      dagreD3.render()(svg, g);

      expect(d3.select("#a #a-lab").empty()).toBe(false);
      expect(d3.select("#a #a-lab").text()).toEqual("Hello");
    });

    it("can be created for an edge", () => {
      g.setNode("a", {});
      g.setNode("b", {});
      g.setEdge("a", "b", { labelType: "html", label: "<p id='ab-lab'>Hello</p>" });
      dagreD3.render()(svg, g);

      expect(d3.select("#ab-lab").empty()).toBe(false);
      expect(d3.select("#ab-lab").text()).toEqual("Hello");
    });
  });

  describe("SVG labels", () => {
    it("can be created for a node", () => {
      const link = document.createElementNS('http://www.w3.org/2000/svg', 'a');
      link.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'http://google.com/');
      link.setAttribute('target', '_blank');
      link.setAttribute('id', 'a-lab');
      link.textContent = 'Google';

      g.setNode("a", { labelType: "svg", label: link });
      dagreD3.render()(svg, g);

      expect(d3.select("#a-lab").empty()).toBe(false);
      expect(d3.select("#a-lab").text()).toEqual("Google");
    });

    it("can be created for an edge", () => {
      const link = document.createElementNS('http://www.w3.org/2000/svg', 'a');
      link.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'http://yahoo.com/');
      link.setAttribute('target', '_blank');
      link.setAttribute('id', 'ab-lab');
      link.textContent = 'Yahoo';

      g.setNode("a", {});
      g.setNode("b", {});
      g.setEdge("a", "b", { labelType: "svg", label: link });
      dagreD3.render()(svg, g);

      expect(d3.select("#ab-lab").empty()).toBe(false);
      expect(d3.select("#ab-lab").text()).toEqual("Yahoo");
    });
  });

  describe("breaks label lines", () => {
    it("on '\\n'", () => {
      g.setNode("a", { id: "a", label: "multi\nline" });
      dagreD3.render()(svg, g);

      const text = d3.select("#a text");
      expect(text.empty()).toBe(false);
      expect(d3.select(text.selectAll("tspan").nodes()[0]).text()).toEqual("multi");
      expect(d3.select(text.selectAll("tspan").nodes()[1]).text()).toEqual("line");
    });

    it("on '\\\\n'", () => {
      g.setNode("a", { id: "a", label: "multi\\nline" });
      dagreD3.render()(svg, g);

      const text = d3.select("#a text");
      expect(text.empty()).toBe(false);
      expect(d3.select(text.selectAll("tspan").nodes()[0]).text()).toEqual("multi");
      expect(d3.select(text.selectAll("tspan").nodes()[1]).text()).toEqual("line");
    });
  });

  describe("styles", () => {
    let canonicalRed;

    beforeEach(() => {
      // Each browser has a different way to represent colors canonically. We
      // create a dummy object here to get the canonical representation for the
      // color red.
      canonicalRed = svg.append("rect").style("fill", "#ff0000").style("fill");
    });

    it("can be applied to a node", () => {
      g.setNode("a", { id: "a", style: "fill: #ff0000", shape: "rect" });
      dagreD3.render()(svg, g);

      expect(d3.select("#a rect").style("fill")).toEqual(canonicalRed);
    });

    it("can be applied to a node label", () => {
      g.setNode("a", { labelId: "a-lab", labelStyle: "stroke: #ff0000" });
      dagreD3.render()(svg, g);

      expect(d3.select("#a-lab text").style("stroke")).toEqual(canonicalRed);
    });

    it("can be applied to an edge", () => {
      g.setNode("a", {});
      g.setNode("b", {});
      g.setEdge("a", "b", { id: "ab", style: "stroke: #ff0000" });
      dagreD3.render()(svg, g);

      expect(d3.select("#ab path").style("stroke")).toEqual(canonicalRed);
    });

    it("can be applied to an edge label", () => {
      g.setNode("a", {});
      g.setNode("b", {});
      g.setEdge("a", "b", { labelId: "ab-lab", labelStyle: "stroke: #ff0000" });
      dagreD3.render()(svg, g);

      expect(d3.select("#ab-lab text").style("stroke")).toEqual(canonicalRed);
    });
  });

  describe("shapes", () => {
    it("include a rect", () => {
      g.setNode("a", { id: "a", shape: "rect", width: 100, height: 200, padding: 0 });
      dagreD3.render()(svg, g);

      const rect = d3.select("#a rect");
      expect(rect.empty()).toBe(false);
      expect((rect.node() as SVGGraphicsElement).getBBox().width).toEqual(100);
      expect((rect.node() as SVGGraphicsElement).getBBox().height).toEqual(200);
    });

    it("include a circle", () => {
      g.setNode("a", { id: "a", shape: "circle", width: 100, height: 250, padding: 0 });
      dagreD3.render()(svg, g);

      const circle = d3.select("#a circle");
      expect(circle.empty()).toBe(false);
      // Should be half of greater of width, height
      expect(Number(circle.attr("r")) * 2).toEqual(250);
    });

    it("include an ellipse", () => {
      g.setNode("a", { id: "a", shape: "ellipse", width: 100, height: 250, padding: 0 });
      dagreD3.render()(svg, g);

      const ellipse = d3.select("#a ellipse");
      expect(ellipse.empty()).toBe(false);
      expect(Number(ellipse.attr("rx")) * 2).toEqual(100);
      expect(Number(ellipse.attr("ry")) * 2).toEqual(250);
    });
  });

  describe("class", () => {
    it("can be set for nodes", () => {
      g.setNode("a", { id: "a", class: (d) => { return d + "-class"; } });
      g.setNode("b", { id: "b", class: "b-class" });
      dagreD3.render()(svg, g);

      expect(d3.select("#a").classed("a-class")).toBe(true);
      expect(d3.select("#b").classed("b-class")).toBe(true);
    });

    it("can be set for edges", () => {
      g.setNode("a", { id: "a" });
      g.setNode("b", { id: "b" });
      g.setEdge("a", "b", { id: "c", class: (d) => { return d.v + d.w + "-class"; } });
      g.setEdge("b", "a", { id: "d", class: "d-class" });
      dagreD3.render()(svg, g);

      expect(d3.select("#c").classed("ab-class")).toBe(true);
      expect(d3.select("#d").classed("d-class")).toBe(true);
    });
  });
});
