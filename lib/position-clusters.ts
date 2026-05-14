"use strict";

import d3 from "./d3";
import { GraphLike, SelectionLike } from "./types";
import * as util from "./util";

export default function positionClusters(selection: SelectionLike, g: GraphLike): void {
  const created = selection.filter(function() { return !d3.select(this).classed("update"); });

  function translate(v: string): string {
    const node = g.node(v);
    return "translate(" + node.x + "," + node.y + ")";
  }

  created.attr("transform", translate);

  util.applyTransition(selection, g)
    .style("opacity", 1)
    .attr("transform", translate);

  util.applyTransition(created.selectAll("rect"), g)
    .attr("width", function(v: any) { return g.node(v).width; })
    .attr("height", function(v: any) { return g.node(v).height; })
    .attr("x", function(v: any) {
      const node = g.node(v);
      return -node.width / 2;
    })
    .attr("y", function(v: any) {
      const node = g.node(v);
      return -node.height / 2;
    });
}
