"use strict";

import d3 from "./d3";
import _ from "./lodash";
import { EdgeObject, GraphLike, SelectionLike } from "./types";
import * as util from "./util";

export default function positionEdgeLabels(selection: SelectionLike, g: GraphLike): void {
  const created = selection.filter(function() { return !d3.select(this).classed("update"); });

  function translate(e: EdgeObject): string {
    const edge = g.edge(e);
    return _.has(edge, "x") ? "translate(" + edge.x + "," + edge.y + ")" : "";
  }

  created.attr("transform", translate);

  util.applyTransition(selection, g)
    .style("opacity", 1)
    .attr("transform", translate);
}
