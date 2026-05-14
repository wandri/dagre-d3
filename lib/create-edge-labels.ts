"use strict";

import d3 from "./d3";
import addLabel from "./label/add-label";
import { GraphLike, SelectionLike } from "./types";
import * as util from "./util";

export default function createEdgeLabels(selection: SelectionLike, g: GraphLike): SelectionLike {
  let svgEdgeLabels = selection.selectAll("g.edgeLabel")
    .data(g.edges(), (e: any) => util.edgeToId(e))
    .classed("update", true);

  svgEdgeLabels.exit().remove();
  svgEdgeLabels.enter().append("g")
    .classed("edgeLabel", true)
    .style("opacity", 0);

  svgEdgeLabels = selection.selectAll("g.edgeLabel");

  svgEdgeLabels.each(function(e: any) {
    const root = d3.select(this);
    root.select(".label").remove();
    const edge = g.edge(e);
    const label = addLabel(root, g.edge(e), "center").classed("label", true);
    const bbox = (label.node() as SVGGraphicsElement).getBBox();

    if (edge.labelId) { label.attr("id", edge.labelId); }
    if (!util.hasOwn(edge, "width")) { edge.width = bbox.width; }
    if (!util.hasOwn(edge, "height")) { edge.height = bbox.height; }
  });

  let exitSelection;

  if (svgEdgeLabels.exit) {
    exitSelection = svgEdgeLabels.exit();
  } else {
    exitSelection = svgEdgeLabels.selectAll(null); // empty selection
  }

  util.applyTransition(exitSelection, g)
    .style("opacity", 0)
    .remove();

  return svgEdgeLabels;
}
