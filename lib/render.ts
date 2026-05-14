import arrowsModule from "./arrows";
import createClustersModule from "./create-clusters";
import createEdgeLabelsModule from "./create-edge-labels";
import createEdgePathsModule from "./create-edge-paths";
import createNodesModule from "./create-nodes";
import dagre from "./dagre";
import d3 from "./d3";
import _ from "./lodash";
import positionClustersModule from "./position-clusters";
import positionEdgeLabelsModule from "./position-edge-labels";
import positionNodesModule from "./position-nodes";
import shapesModule from "./shapes";
import { ArrowMap, GraphLike, RenderFn, SelectionLike, ShapeMap } from "./types";
import { hasOwn as utilHasOwn } from "./util";

const layout = dagre.layout;

// This design is based on http://bost.ocks.org/mike/chart/.
export default function render(): RenderFn {
  let createNodes = createNodesModule;
  let createClusters = createClustersModule;
  let createEdgeLabels = createEdgeLabelsModule;
  let createEdgePaths = createEdgePathsModule;
  const positionNodes = positionNodesModule;
  const positionEdgeLabels = positionEdgeLabelsModule;
  const positionClusters = positionClustersModule;
  let shapes = shapesModule;
  let arrows = arrowsModule;

  const fn = ((svg: SelectionLike, g: GraphLike) => {
    preProcessGraph(g);

    const outputGroup = createOrSelectGroup(svg, "output");
    const clustersGroup = createOrSelectGroup(outputGroup, "clusters");
    const edgePathsGroup = createOrSelectGroup(outputGroup, "edgePaths");
    const edgeLabels = createEdgeLabels(createOrSelectGroup(outputGroup, "edgeLabels"), g);
    const nodes = createNodes(createOrSelectGroup(outputGroup, "nodes"), g, shapes);

    layout(g);

    positionNodes(nodes, g);
    positionEdgeLabels(edgeLabels, g);
    createEdgePaths(edgePathsGroup, g, arrows);

    const clusters = createClusters(clustersGroup, g);
    positionClusters(clusters, g);

    postProcessGraph(g);
  }) as RenderFn;

  function createNodesAccessor(): typeof createNodes;
  function createNodesAccessor(value: typeof createNodes): RenderFn;
  function createNodesAccessor(value?: typeof createNodes): typeof createNodes | RenderFn {
    if (!arguments.length) return createNodes;
    if (value) { createNodes = value; }
    return fn;
  }
  fn.createNodes = createNodesAccessor;

  function createClustersAccessor(): typeof createClusters;
  function createClustersAccessor(value: typeof createClusters): RenderFn;
  function createClustersAccessor(value?: typeof createClusters): typeof createClusters | RenderFn {
    if (!arguments.length) return createClusters;
    if (value) { createClusters = value; }
    return fn;
  }
  fn.createClusters = createClustersAccessor;

  function createEdgeLabelsAccessor(): typeof createEdgeLabels;
  function createEdgeLabelsAccessor(value: typeof createEdgeLabels): RenderFn;
  function createEdgeLabelsAccessor(value?: typeof createEdgeLabels): typeof createEdgeLabels | RenderFn {
    if (!arguments.length) return createEdgeLabels;
    if (value) { createEdgeLabels = value; }
    return fn;
  }
  fn.createEdgeLabels = createEdgeLabelsAccessor;

  function createEdgePathsAccessor(): typeof createEdgePaths;
  function createEdgePathsAccessor(value: typeof createEdgePaths): RenderFn;
  function createEdgePathsAccessor(value?: typeof createEdgePaths): typeof createEdgePaths | RenderFn {
    if (!arguments.length) return createEdgePaths;
    if (value) { createEdgePaths = value; }
    return fn;
  }
  fn.createEdgePaths = createEdgePathsAccessor;

  function shapesAccessor(): ShapeMap;
  function shapesAccessor(value: ShapeMap): RenderFn;
  function shapesAccessor(value?: ShapeMap): ShapeMap | RenderFn {
    if (!arguments.length) return shapes;
    if (value) { shapes = value; }
    return fn;
  }
  fn.shapes = shapesAccessor;

  function arrowsAccessor(): ArrowMap;
  function arrowsAccessor(value: ArrowMap): RenderFn;
  function arrowsAccessor(value?: ArrowMap): ArrowMap | RenderFn {
    if (!arguments.length) return arrows;
    if (value) { arrows = value; }
    return fn;
  }
  fn.arrows = arrowsAccessor;

  return fn;
}

const NODE_DEFAULT_ATTRS = {
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 10,
  rx: 0,
  ry: 0,
  shape: "rect"
};

const EDGE_DEFAULT_ATTRS = {
  arrowhead: "normal",
  curve: d3.curveLinear
};

function preProcessGraph(g: GraphLike): void {
  g.nodes().forEach((v) => {
    const node = g.node(v);
    if (!utilHasOwn(node, "label") && !g.children(v).length) { node.label = v; }

    if (utilHasOwn(node, "paddingX")) {
      _.defaults(node, {
        paddingLeft: node.paddingX,
        paddingRight: node.paddingX
      });
    }

    if (utilHasOwn(node, "paddingY")) {
      _.defaults(node, {
        paddingTop: node.paddingY,
        paddingBottom: node.paddingY
      });
    }

    if (utilHasOwn(node, "padding")) {
      _.defaults(node, {
        paddingLeft: node.padding,
        paddingRight: node.padding,
        paddingTop: node.padding,
        paddingBottom: node.padding
      });
    }

    _.defaults(node, NODE_DEFAULT_ATTRS);

    _.each(["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"], (k: string) => {
      node[k] = Number(node[k]);
    });

    // Save dimensions for restore during post-processing
    if (utilHasOwn(node, "width")) { node._prevWidth = node.width; }
    if (utilHasOwn(node, "height")) { node._prevHeight = node.height; }
  });

  g.edges().forEach((e) => {
    const edge = g.edge(e);
    if (!utilHasOwn(edge, "label")) { edge.label = ""; }
    _.defaults(edge, EDGE_DEFAULT_ATTRS);
  });
}

function postProcessGraph(g: GraphLike): void {
  _.each(g.nodes(), (v: string) => {
    const node = g.node(v);

    // Restore original dimensions
    if (utilHasOwn(node, "_prevWidth")) {
      node.width = node._prevWidth;
    } else {
      delete node.width;
    }

    if (utilHasOwn(node, "_prevHeight")) {
      node.height = node._prevHeight;
    } else {
      delete node.height;
    }

    delete node._prevWidth;
    delete node._prevHeight;
  });
}

function createOrSelectGroup(root: SelectionLike, name: string): SelectionLike {
  let selection = root.select("g." + name);
  if (selection.empty()) {
    selection = root.append("g").attr("class", name);
  }
  return selection;
}
