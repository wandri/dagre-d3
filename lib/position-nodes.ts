"use strict";

import d3 from "./d3";
import { GraphLike, SelectionLike } from "./types";
import * as util from "./util";

export default function positionNodes(selection: SelectionLike, g: GraphLike): void {
  const created = selection.filter(function() { return !d3.select(this).classed("update"); });

  function translate(v: string): string {
    const node = g.node(v);
    return "translate(" + node.x + "," + node.y + ")";
  }

  created.attr("transform", translate);

  util.applyTransition(selection, g)
    .style("opacity", 1)
    .attr("transform", translate);
}
