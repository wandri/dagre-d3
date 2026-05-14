"use strict";

import d3 from "./d3";
import intersectNode from "./intersect/intersect-node";
import _ from "./lodash";
import { ArrowMap, EdgeObject, GraphLike, Point, SelectionLike } from "./types";
import * as util from "./util";

export default function createEdgePaths(selection: SelectionLike, g: GraphLike, arrows: ArrowMap): SelectionLike {
  const previousPaths = selection.selectAll("g.edgePath")
    .data(g.edges(), (e: any) => util.edgeToId(e))
    .classed("update", true);

  const newPaths = enter(previousPaths, g);
  exit(previousPaths, g);

  const svgPaths = previousPaths.merge !== undefined ? previousPaths.merge(newPaths) : previousPaths;
  util.applyTransition(svgPaths, g)
    .style("opacity", 1);

  // Save DOM element in the path group, and set ID and class
  svgPaths.each(function(e: any) {
    const domEdge = d3.select(this);
    const edge = g.edge(e);
    edge.elem = this;

    if (edge.id) {
      domEdge.attr("id", edge.id);
    }

    util.applyClass(domEdge, edge["class"],
      (domEdge.classed("update") ? "update " : "") + "edgePath");
  });

  svgPaths.selectAll("path.path")
    .each(function(e: any) {
      const edge = g.edge(e);
      edge.arrowheadId = _.uniqueId("arrowhead");

      const domEdge = d3.select(this)
        .attr("marker-end", () => {
          return "url(" + makeFragmentRef(location.href, edge.arrowheadId) + ")";
        })
        .style("fill", "none");

      util.applyTransition(domEdge, g)
        .attr("d", (e: any) => calcPoints(g, e));

      util.applyStyle(domEdge, edge.style);
    });

  svgPaths.selectAll("defs *").remove();
  svgPaths.selectAll("defs")
    .each(function(e: any) {
      const edge = g.edge(e);
      const arrowhead = arrows[edge.arrowhead];
      arrowhead(d3.select(this), edge.arrowheadId, edge, "arrowhead");
    });

  return svgPaths;
}

function makeFragmentRef(url: string, fragmentId: string): string {
  const baseUrl = url.split("#")[0];
  return baseUrl + "#" + fragmentId;
}

function calcPoints(g: GraphLike, e: EdgeObject): string {
  const edge = g.edge(e);
  const tail = g.node(e.v);
  const head = g.node(e.w);
  const points = edge.points.slice(1, edge.points.length - 1);
  points.unshift(intersectNode(tail, points[0]));
  points.push(intersectNode(head, points[points.length - 1]));

  return createLine(edge, points);
}

function createLine(edge: any, points: Point[]): string {
  const line = (d3.line || d3.svg.line)()
    .x((d: Point) => d.x)
    .y((d: Point) => d.y);
  
  (line.curve || line.interpolate)(edge.curve);

  return line(points);
}

function getCoords(elem: SVGGraphicsElement): Point {
  const bbox = elem.getBBox();
  const owner = elem.ownerSVGElement;
  const ownerMatrix = owner && owner.getScreenCTM();
  const elemMatrix = elem.getScreenCTM();
  if (!ownerMatrix || !elemMatrix) {
    return { x: bbox.width / 2, y: bbox.height / 2 };
  }

  const matrix = ownerMatrix
    .inverse()
    .multiply(elemMatrix)
    .translate(bbox.width / 2, bbox.height / 2);
  return { x: matrix.e, y: matrix.f };
}

function enter(svgPaths: SelectionLike, g: GraphLike): SelectionLike {
  const svgPathsEnter = svgPaths.enter().append("g")
    .attr("class", "edgePath")
    .style("opacity", 0);
  svgPathsEnter.append("path")
    .attr("class", "path")
    .attr("d", (e: any) => {
      const edge = g.edge(e);
      const sourceElem = g.node(e.v).elem as SVGGraphicsElement;
      const points = _.range(edge.points.length).map(() => getCoords(sourceElem));
      return createLine(edge, points);
    });
  svgPathsEnter.append("defs");
  return svgPathsEnter;
}

function exit(svgPaths: SelectionLike, g: GraphLike): void {
  const svgPathExit = svgPaths.exit();
  util.applyTransition(svgPathExit, g)
    .style("opacity", 0)
    .remove();
}
