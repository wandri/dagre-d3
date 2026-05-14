import d3 from "./d3";
import addLabel from "./label/add-label";
import { GraphLike, SelectionLike } from "./types";
import * as util from "./util";

export default function createClusters(selection: SelectionLike, g: GraphLike): SelectionLike {
  const clusters = g.nodes().filter((v) => util.isSubgraph(g, v));
  let svgClusters = selection.selectAll("g.cluster")
    .data(clusters, (v: any) => v);

  svgClusters.selectAll("*").remove();
  svgClusters.enter().append("g")
    .attr("class", "cluster")
    .attr("id", (v: any) => {
      const node = g.node(v);
      return node.id;
    })
    .style("opacity", 0);
  
  svgClusters = selection.selectAll("g.cluster");

  util.applyTransition(svgClusters, g)
    .style("opacity", 1);

  svgClusters.each(function(v: any) {
    const node = g.node(v);
    const thisGroup = d3.select(this);
    d3.select(this).append("rect");
    const labelGroup = thisGroup.append("g").attr("class", "label");
    addLabel(labelGroup, node, node.clusterLabelPos);
  });

  svgClusters.selectAll("rect").each(function(c: any) {
    const node = g.node(c);
    const domCluster = d3.select(this);
    util.applyStyle(domCluster, node.style);
  });

  let exitSelection;

  if (svgClusters.exit) {
    exitSelection = svgClusters.exit();
  } else {
    exitSelection = svgClusters.selectAll(null); // empty selection
  }

  util.applyTransition(exitSelection, g)
    .style("opacity", 0)
    .remove();

  return svgClusters;
}
