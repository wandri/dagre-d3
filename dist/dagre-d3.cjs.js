var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var index_exports = {};
__export(index_exports, {
  dagre: () => dagre_default,
  default: () => index_default,
  graphlib: () => graphlib_default,
  intersect: () => intersect_default,
  render: () => render,
  util: () => util_exports,
  version: () => version_default
});
module.exports = __toCommonJS(index_exports);

// lib/dagre.ts
var dagre = __toESM(require("@dagrejs/dagre"));
var dagre_default = dagre;

// lib/graphlib.ts
var graphlib = __toESM(require("@dagrejs/graphlib"));
var graphlib_default = graphlib;

// lib/intersect/intersect-ellipse.ts
function intersectEllipse(node, rx, ry, point) {
  const cx = node.x;
  const cy = node.y;
  const px = cx - point.x;
  const py = cy - point.y;
  const det = Math.sqrt(rx * rx * py * py + ry * ry * px * px);
  let dx = Math.abs(rx * ry * px / det);
  if (point.x < cx) {
    dx = -dx;
  }
  let dy = Math.abs(rx * ry * py / det);
  if (point.y < cy) {
    dy = -dy;
  }
  return { x: cx + dx, y: cy + dy };
}

// lib/intersect/intersect-circle.ts
function intersectCircle(node, rx, point) {
  return intersectEllipse(node, rx, rx, point);
}

// lib/intersect/intersect-node.ts
function intersectNode(node, point) {
  return node.intersect(point);
}

// lib/intersect/intersect-line.ts
function intersectLine(p1, p2, q1, q2) {
  let num;
  const a1 = p2.y - p1.y;
  const b1 = p1.x - p2.x;
  const c1 = p2.x * p1.y - p1.x * p2.y;
  const r3 = a1 * q1.x + b1 * q1.y + c1;
  const r4 = a1 * q2.x + b1 * q2.y + c1;
  if (r3 !== 0 && r4 !== 0 && sameSign(r3, r4)) {
    return;
  }
  const a2 = q2.y - q1.y;
  const b2 = q1.x - q2.x;
  const c2 = q2.x * q1.y - q1.x * q2.y;
  const r1 = a2 * p1.x + b2 * p1.y + c2;
  const r2 = a2 * p2.x + b2 * p2.y + c2;
  if (r1 !== 0 && r2 !== 0 && sameSign(r1, r2)) {
    return;
  }
  const denom = a1 * b2 - a2 * b1;
  if (denom === 0) {
    return;
  }
  const offset = Math.abs(denom / 2);
  num = b1 * c2 - b2 * c1;
  const x = num < 0 ? (num - offset) / denom : (num + offset) / denom;
  num = a2 * c1 - a1 * c2;
  const y = num < 0 ? (num - offset) / denom : (num + offset) / denom;
  return { x, y };
}
function sameSign(r1, r2) {
  return r1 * r2 > 0;
}

// lib/intersect/intersect-polygon.ts
function intersectPolygon(node, polyPoints, point) {
  const x1 = node.x;
  const y1 = node.y;
  const intersections = [];
  let minX = Number.POSITIVE_INFINITY;
  let minY = Number.POSITIVE_INFINITY;
  polyPoints.forEach((entry) => {
    minX = Math.min(minX, entry.x);
    minY = Math.min(minY, entry.y);
  });
  const left = x1 - node.width / 2 - minX;
  const top = y1 - node.height / 2 - minY;
  for (let i = 0; i < polyPoints.length; i++) {
    const p1 = polyPoints[i];
    const p2 = polyPoints[i < polyPoints.length - 1 ? i + 1 : 0];
    const intersect2 = intersectLine(
      node,
      point,
      { x: left + p1.x, y: top + p1.y },
      { x: left + p2.x, y: top + p2.y }
    );
    if (intersect2) {
      intersections.push(intersect2);
    }
  }
  if (!intersections.length) {
    console.log("NO INTERSECTION FOUND, RETURN NODE CENTER", node);
    return node;
  }
  if (intersections.length > 1) {
    intersections.sort((p, q) => {
      const pdx = p.x - point.x;
      const pdy = p.y - point.y;
      const distp = Math.sqrt(pdx * pdx + pdy * pdy);
      const qdx = q.x - point.x;
      const qdy = q.y - point.y;
      const distq = Math.sqrt(qdx * qdx + qdy * qdy);
      return distp < distq ? -1 : distp === distq ? 0 : 1;
    });
  }
  return intersections[0];
}

// lib/intersect/intersect-rect.ts
function intersectRect(node, point) {
  const x = node.x;
  const y = node.y;
  const dx = point.x - x;
  const dy = point.y - y;
  let w = node.width / 2;
  let h = node.height / 2;
  let sx;
  let sy;
  if (Math.abs(dy) * w > Math.abs(dx) * h) {
    if (dy < 0) {
      h = -h;
    }
    sx = dy === 0 ? 0 : h * dx / dy;
    sy = h;
  } else {
    if (dx < 0) {
      w = -w;
    }
    sx = w;
    sy = dx === 0 ? 0 : w * dy / dx;
  }
  return { x: x + sx, y: y + sy };
}

// lib/intersect/index.ts
var intersect = {
  node: intersectNode,
  circle: intersectCircle,
  ellipse: intersectEllipse,
  polygon: intersectPolygon,
  rect: intersectRect
};
var intersect_default = intersect;

// lib/util.ts
var util_exports = {};
__export(util_exports, {
  applyClass: () => applyClass,
  applyStyle: () => applyStyle,
  applyTransition: () => applyTransition,
  default: () => util_default,
  edgeToId: () => edgeToId,
  hasOwn: () => hasOwn,
  isSubgraph: () => isSubgraph
});

// lib/lodash.ts
var import_defaults = __toESM(require("lodash/defaults"));
var import_each = __toESM(require("lodash/each"));
var import_has = __toESM(require("lodash/has"));
var import_isFunction = __toESM(require("lodash/isFunction"));
var import_isPlainObject = __toESM(require("lodash/isPlainObject"));
var import_pick = __toESM(require("lodash/pick"));
var import_range = __toESM(require("lodash/range"));
var import_uniqueId = __toESM(require("lodash/uniqueId"));
var lodash = {
  defaults: import_defaults.default,
  each: import_each.default,
  has: import_has.default,
  isFunction: import_isFunction.default,
  isPlainObject: import_isPlainObject.default,
  pick: import_pick.default,
  range: import_range.default,
  uniqueId: import_uniqueId.default
};
var lodash_default = lodash;

// lib/util.ts
function isSubgraph(g, v) {
  return !!g.children(v).length;
}
function edgeToId(e) {
  return escapeId(e.v) + ":" + escapeId(e.w) + ":" + escapeId(e.name);
}
function hasOwn(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}
var ID_DELIM = /:/g;
function escapeId(str) {
  return str ? String(str).replace(ID_DELIM, "\\:") : "";
}
function applyStyle(dom, styleFn) {
  if (styleFn) {
    dom.attr("style", styleFn);
  }
}
function applyClass(dom, classFn, otherClasses) {
  if (classFn) {
    dom.attr("class", classFn).attr("class", otherClasses + " " + dom.attr("class"));
  }
}
function applyTransition(selection, g) {
  const graph = g.graph();
  if (lodash_default.isPlainObject(graph)) {
    const transition = graph.transition;
    if (lodash_default.isFunction(transition)) {
      return transition(selection);
    }
  }
  return selection;
}
var util_default = {
  isSubgraph,
  edgeToId,
  applyStyle,
  applyClass,
  applyTransition,
  hasOwn
};

// lib/arrows.ts
var normal = (parent, id, edge, type) => {
  const marker = parent.append("marker").attr("id", id).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto");
  const path = marker.append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  applyStyle(path, edge[type + "Style"]);
  if (edge[type + "Class"]) {
    path.attr("class", edge[type + "Class"]);
  }
};
var vee = (parent, id, edge, type) => {
  const marker = parent.append("marker").attr("id", id).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto");
  const path = marker.append("path").attr("d", "M 0 0 L 10 5 L 0 10 L 4 5 z").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  applyStyle(path, edge[type + "Style"]);
  if (edge[type + "Class"]) {
    path.attr("class", edge[type + "Class"]);
  }
};
var undirected = (parent, id, edge, type) => {
  const marker = parent.append("marker").attr("id", id).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto");
  const path = marker.append("path").attr("d", "M 0 5 L 10 5").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  applyStyle(path, edge[type + "Style"]);
  if (edge[type + "Class"]) {
    path.attr("class", edge[type + "Class"]);
  }
};
var arrows = {
  "default": normal,
  "normal": normal,
  "vee": vee,
  "undirected": undirected
};
var arrows_default = arrows;

// lib/d3.ts
var d3 = __toESM(require("d3"));
var d3_default = d3;

// lib/label/add-html-label.ts
function addHtmlLabel(root, node) {
  const fo = root.append("foreignObject").attr("width", "100000");
  const div = fo.append("xhtml:div");
  div.attr("xmlns", "http://www.w3.org/1999/xhtml");
  const label = node.label;
  switch (typeof label) {
    case "function":
      div.insert(label);
      break;
    case "object":
      div.insert(() => label);
      break;
    default:
      div.html(label);
  }
  applyStyle(div, node.labelStyle);
  div.style("display", "inline-block");
  div.style("white-space", "nowrap");
  const client = div.node().getBoundingClientRect();
  fo.attr("width", client.width).attr("height", client.height);
  return fo;
}

// lib/label/add-svg-label.ts
function addSVGLabel(root, node) {
  const domNode = root;
  domNode.node().appendChild(node.label);
  applyStyle(domNode, node.labelStyle);
  return domNode;
}

// lib/label/add-text-label.ts
function addTextLabel(root, node) {
  const domNode = root.append("text");
  const lines = processEscapeSequences(node.label).split("\n");
  for (let i = 0; i < lines.length; i++) {
    domNode.append("tspan").attr("xml:space", "preserve").attr("dy", "1em").attr("x", "1").text(lines[i]);
  }
  applyStyle(domNode, node.labelStyle);
  return domNode;
}
function processEscapeSequences(text) {
  let newText = "";
  let escaped = false;
  let ch;
  for (let i = 0; i < text.length; ++i) {
    ch = text[i];
    if (escaped) {
      switch (ch) {
        case "n":
          newText += "\n";
          break;
        default:
          newText += ch;
      }
      escaped = false;
    } else if (ch === "\\") {
      escaped = true;
    } else {
      newText += ch;
    }
  }
  return newText;
}

// lib/label/add-label.ts
function addLabel(root, node, location2) {
  const label = node.label;
  const labelSvg = root.append("g");
  if (node.labelType === "svg") {
    addSVGLabel(labelSvg, node);
  } else if (typeof label !== "string" || node.labelType === "html") {
    addHtmlLabel(labelSvg, node);
  } else {
    addTextLabel(labelSvg, node);
  }
  const labelBBox = labelSvg.node().getBBox();
  let y;
  switch (location2) {
    case "top":
      y = -node.height / 2;
      break;
    case "bottom":
      y = node.height / 2 - labelBBox.height;
      break;
    default:
      y = -labelBBox.height / 2;
  }
  labelSvg.attr(
    "transform",
    "translate(" + -labelBBox.width / 2 + "," + y + ")"
  );
  return labelSvg;
}

// lib/create-clusters.ts
function createClusters(selection, g) {
  const clusters = g.nodes().filter((v) => isSubgraph(g, v));
  let svgClusters = selection.selectAll("g.cluster").data(clusters, (v) => v);
  svgClusters.selectAll("*").remove();
  svgClusters.enter().append("g").attr("class", "cluster").attr("id", (v) => {
    const node = g.node(v);
    return node.id;
  }).style("opacity", 0);
  svgClusters = selection.selectAll("g.cluster");
  applyTransition(svgClusters, g).style("opacity", 1);
  svgClusters.each(function(v) {
    const node = g.node(v);
    const thisGroup = d3_default.select(this);
    d3_default.select(this).append("rect");
    const labelGroup = thisGroup.append("g").attr("class", "label");
    addLabel(labelGroup, node, node.clusterLabelPos);
  });
  svgClusters.selectAll("rect").each(function(c) {
    const node = g.node(c);
    const domCluster = d3_default.select(this);
    applyStyle(domCluster, node.style);
  });
  let exitSelection;
  if (svgClusters.exit) {
    exitSelection = svgClusters.exit();
  } else {
    exitSelection = svgClusters.selectAll(null);
  }
  applyTransition(exitSelection, g).style("opacity", 0).remove();
  return svgClusters;
}

// lib/create-edge-labels.ts
function createEdgeLabels(selection, g) {
  let svgEdgeLabels = selection.selectAll("g.edgeLabel").data(g.edges(), (e) => edgeToId(e)).classed("update", true);
  svgEdgeLabels.exit().remove();
  svgEdgeLabels.enter().append("g").classed("edgeLabel", true).style("opacity", 0);
  svgEdgeLabels = selection.selectAll("g.edgeLabel");
  svgEdgeLabels.each(function(e) {
    const root = d3_default.select(this);
    root.select(".label").remove();
    const edge = g.edge(e);
    const label = addLabel(root, g.edge(e), "center").classed("label", true);
    const bbox = label.node().getBBox();
    if (edge.labelId) {
      label.attr("id", edge.labelId);
    }
    if (!hasOwn(edge, "width")) {
      edge.width = bbox.width;
    }
    if (!hasOwn(edge, "height")) {
      edge.height = bbox.height;
    }
  });
  let exitSelection;
  if (svgEdgeLabels.exit) {
    exitSelection = svgEdgeLabels.exit();
  } else {
    exitSelection = svgEdgeLabels.selectAll(null);
  }
  applyTransition(exitSelection, g).style("opacity", 0).remove();
  return svgEdgeLabels;
}

// lib/create-edge-paths.ts
function createEdgePaths(selection, g, arrows2) {
  const previousPaths = selection.selectAll("g.edgePath").data(g.edges(), (e) => edgeToId(e)).classed("update", true);
  const newPaths = enter(previousPaths, g);
  exit(previousPaths, g);
  const svgPaths = previousPaths.merge !== void 0 ? previousPaths.merge(newPaths) : previousPaths;
  applyTransition(svgPaths, g).style("opacity", 1);
  svgPaths.each(function(e) {
    const domEdge = d3_default.select(this);
    const edge = g.edge(e);
    edge.elem = this;
    if (edge.id) {
      domEdge.attr("id", edge.id);
    }
    applyClass(
      domEdge,
      edge["class"],
      (domEdge.classed("update") ? "update " : "") + "edgePath"
    );
  });
  svgPaths.selectAll("path.path").each(function(e) {
    const edge = g.edge(e);
    edge.arrowheadId = lodash_default.uniqueId("arrowhead");
    const domEdge = d3_default.select(this).attr("marker-end", () => {
      return "url(" + makeFragmentRef(location.href, edge.arrowheadId) + ")";
    }).style("fill", "none");
    applyTransition(domEdge, g).attr("d", (e2) => calcPoints(g, e2));
    applyStyle(domEdge, edge.style);
  });
  svgPaths.selectAll("defs *").remove();
  svgPaths.selectAll("defs").each(function(e) {
    const edge = g.edge(e);
    const arrowhead = arrows2[edge.arrowhead];
    arrowhead(d3_default.select(this), edge.arrowheadId, edge, "arrowhead");
  });
  return svgPaths;
}
function makeFragmentRef(url, fragmentId) {
  const baseUrl = url.split("#")[0];
  return baseUrl + "#" + fragmentId;
}
function calcPoints(g, e) {
  const edge = g.edge(e);
  const tail = g.node(e.v);
  const head = g.node(e.w);
  const points = edge.points.slice(1, edge.points.length - 1);
  points.unshift(intersectNode(tail, points[0]));
  points.push(intersectNode(head, points[points.length - 1]));
  return createLine(edge, points);
}
function createLine(edge, points) {
  const line = (d3_default.line || d3_default.svg.line)().x((d) => d.x).y((d) => d.y);
  (line.curve || line.interpolate)(edge.curve);
  return line(points);
}
function getCoords(elem) {
  const bbox = elem.getBBox();
  const owner = elem.ownerSVGElement;
  const ownerMatrix = owner && owner.getScreenCTM();
  const elemMatrix = elem.getScreenCTM();
  if (!ownerMatrix || !elemMatrix) {
    return { x: bbox.width / 2, y: bbox.height / 2 };
  }
  const matrix = ownerMatrix.inverse().multiply(elemMatrix).translate(bbox.width / 2, bbox.height / 2);
  return { x: matrix.e, y: matrix.f };
}
function enter(svgPaths, g) {
  const svgPathsEnter = svgPaths.enter().append("g").attr("class", "edgePath").style("opacity", 0);
  svgPathsEnter.append("path").attr("class", "path").attr("d", (e) => {
    const edge = g.edge(e);
    const sourceElem = g.node(e.v).elem;
    const points = lodash_default.range(edge.points.length).map(() => getCoords(sourceElem));
    return createLine(edge, points);
  });
  svgPathsEnter.append("defs");
  return svgPathsEnter;
}
function exit(svgPaths, g) {
  const svgPathExit = svgPaths.exit();
  applyTransition(svgPathExit, g).style("opacity", 0).remove();
}

// lib/create-nodes.ts
function createNodes(selection, g, shapes2) {
  const simpleNodes = g.nodes().filter((v) => !isSubgraph(g, v));
  let svgNodes = selection.selectAll("g.node").data(simpleNodes, (v) => v).classed("update", true);
  svgNodes.exit().remove();
  svgNodes.enter().append("g").attr("class", "node").style("opacity", 0);
  svgNodes = selection.selectAll("g.node");
  svgNodes.each(function(v) {
    const node = g.node(v);
    const thisGroup = d3_default.select(this);
    applyClass(
      thisGroup,
      node["class"],
      (thisGroup.classed("update") ? "update " : "") + "node"
    );
    thisGroup.select("g.label").remove();
    const labelGroup = thisGroup.append("g").attr("class", "label");
    const labelDom = addLabel(labelGroup, node);
    const shape = shapes2[node.shape];
    const bbox = lodash_default.pick(labelDom.node().getBBox(), "width", "height");
    node.elem = this;
    if (node.id) {
      thisGroup.attr("id", node.id);
    }
    if (node.labelId) {
      labelGroup.attr("id", node.labelId);
    }
    if (lodash_default.has(node, "width")) {
      bbox.width = node.width;
    }
    if (lodash_default.has(node, "height")) {
      bbox.height = node.height;
    }
    bbox.width += node.paddingLeft + node.paddingRight;
    bbox.height += node.paddingTop + node.paddingBottom;
    labelGroup.attr("transform", "translate(" + (node.paddingLeft - node.paddingRight) / 2 + "," + (node.paddingTop - node.paddingBottom) / 2 + ")");
    const root = d3_default.select(this);
    root.select(".label-container").remove();
    const shapeSvg = shape(root, bbox, node).classed("label-container", true);
    applyStyle(shapeSvg, node.style);
    const shapeBBox = shapeSvg.node().getBBox();
    node.width = shapeBBox.width;
    node.height = shapeBBox.height;
  });
  let exitSelection;
  if (svgNodes.exit) {
    exitSelection = svgNodes.exit();
  } else {
    exitSelection = svgNodes.selectAll(null);
  }
  applyTransition(exitSelection, g).style("opacity", 0).remove();
  return svgNodes;
}

// lib/position-clusters.ts
function positionClusters(selection, g) {
  const created = selection.filter(function() {
    return !d3_default.select(this).classed("update");
  });
  function translate(v) {
    const node = g.node(v);
    return "translate(" + node.x + "," + node.y + ")";
  }
  created.attr("transform", translate);
  applyTransition(selection, g).style("opacity", 1).attr("transform", translate);
  applyTransition(created.selectAll("rect"), g).attr("width", function(v) {
    return g.node(v).width;
  }).attr("height", function(v) {
    return g.node(v).height;
  }).attr("x", function(v) {
    const node = g.node(v);
    return -node.width / 2;
  }).attr("y", function(v) {
    const node = g.node(v);
    return -node.height / 2;
  });
}

// lib/position-edge-labels.ts
function positionEdgeLabels(selection, g) {
  const created = selection.filter(function() {
    return !d3_default.select(this).classed("update");
  });
  function translate(e) {
    const edge = g.edge(e);
    return lodash_default.has(edge, "x") ? "translate(" + edge.x + "," + edge.y + ")" : "";
  }
  created.attr("transform", translate);
  applyTransition(selection, g).style("opacity", 1).attr("transform", translate);
}

// lib/position-nodes.ts
function positionNodes(selection, g) {
  const created = selection.filter(function() {
    return !d3_default.select(this).classed("update");
  });
  function translate(v) {
    const node = g.node(v);
    return "translate(" + node.x + "," + node.y + ")";
  }
  created.attr("transform", translate);
  applyTransition(selection, g).style("opacity", 1).attr("transform", translate);
}

// lib/shapes.ts
var rect = (parent, bbox, node) => {
  const shapeSvg = parent.insert("rect", ":first-child").attr("rx", node.rx).attr("ry", node.ry).attr("x", -bbox.width / 2).attr("y", -bbox.height / 2).attr("width", bbox.width).attr("height", bbox.height);
  node.intersect = (point) => {
    return intersectRect(node, point);
  };
  return shapeSvg;
};
var ellipse = (parent, bbox, node) => {
  const rx = bbox.width / 2;
  const ry = bbox.height / 2;
  const shapeSvg = parent.insert("ellipse", ":first-child").attr("x", -bbox.width / 2).attr("y", -bbox.height / 2).attr("rx", rx).attr("ry", ry);
  node.intersect = (point) => {
    return intersectEllipse(node, rx, ry, point);
  };
  return shapeSvg;
};
var circle = (parent, bbox, node) => {
  const r = Math.max(bbox.width, bbox.height) / 2;
  const shapeSvg = parent.insert("circle", ":first-child").attr("x", -bbox.width / 2).attr("y", -bbox.height / 2).attr("r", r);
  node.intersect = (point) => {
    return intersectCircle(node, r, point);
  };
  return shapeSvg;
};
var diamond = (parent, bbox, node) => {
  const w = bbox.width * Math.SQRT2 / 2;
  const h = bbox.height * Math.SQRT2 / 2;
  const points = [
    { x: 0, y: -h },
    { x: -w, y: 0 },
    { x: 0, y: h },
    { x: w, y: 0 }
  ];
  const shapeSvg = parent.insert("polygon", ":first-child").attr("points", points.map((p) => p.x + "," + p.y).join(" "));
  node.intersect = (p) => {
    return intersectPolygon(node, points, p);
  };
  return shapeSvg;
};
var shapes = {
  rect,
  ellipse,
  circle,
  diamond
};
var shapes_default = shapes;

// lib/render.ts
var layout = dagre_default.layout;
function render() {
  let createNodes2 = createNodes;
  let createClusters2 = createClusters;
  let createEdgeLabels2 = createEdgeLabels;
  let createEdgePaths2 = createEdgePaths;
  const positionNodes2 = positionNodes;
  const positionEdgeLabels2 = positionEdgeLabels;
  const positionClusters2 = positionClusters;
  let shapes2 = shapes_default;
  let arrows2 = arrows_default;
  const fn = ((svg, g) => {
    preProcessGraph(g);
    const outputGroup = createOrSelectGroup(svg, "output");
    const clustersGroup = createOrSelectGroup(outputGroup, "clusters");
    const edgePathsGroup = createOrSelectGroup(outputGroup, "edgePaths");
    const edgeLabels = createEdgeLabels2(createOrSelectGroup(outputGroup, "edgeLabels"), g);
    const nodes = createNodes2(createOrSelectGroup(outputGroup, "nodes"), g, shapes2);
    layout(g);
    positionNodes2(nodes, g);
    positionEdgeLabels2(edgeLabels, g);
    createEdgePaths2(edgePathsGroup, g, arrows2);
    const clusters = createClusters2(clustersGroup, g);
    positionClusters2(clusters, g);
    postProcessGraph(g);
  });
  function createNodesAccessor(value) {
    if (!arguments.length) return createNodes2;
    if (value) {
      createNodes2 = value;
    }
    return fn;
  }
  fn.createNodes = createNodesAccessor;
  function createClustersAccessor(value) {
    if (!arguments.length) return createClusters2;
    if (value) {
      createClusters2 = value;
    }
    return fn;
  }
  fn.createClusters = createClustersAccessor;
  function createEdgeLabelsAccessor(value) {
    if (!arguments.length) return createEdgeLabels2;
    if (value) {
      createEdgeLabels2 = value;
    }
    return fn;
  }
  fn.createEdgeLabels = createEdgeLabelsAccessor;
  function createEdgePathsAccessor(value) {
    if (!arguments.length) return createEdgePaths2;
    if (value) {
      createEdgePaths2 = value;
    }
    return fn;
  }
  fn.createEdgePaths = createEdgePathsAccessor;
  function shapesAccessor(value) {
    if (!arguments.length) return shapes2;
    if (value) {
      shapes2 = value;
    }
    return fn;
  }
  fn.shapes = shapesAccessor;
  function arrowsAccessor(value) {
    if (!arguments.length) return arrows2;
    if (value) {
      arrows2 = value;
    }
    return fn;
  }
  fn.arrows = arrowsAccessor;
  return fn;
}
var NODE_DEFAULT_ATTRS = {
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 10,
  rx: 0,
  ry: 0,
  shape: "rect"
};
var EDGE_DEFAULT_ATTRS = {
  arrowhead: "normal",
  curve: d3_default.curveLinear
};
function preProcessGraph(g) {
  g.nodes().forEach((v) => {
    const node = g.node(v);
    if (!hasOwn(node, "label") && !g.children(v).length) {
      node.label = v;
    }
    if (hasOwn(node, "paddingX")) {
      lodash_default.defaults(node, {
        paddingLeft: node.paddingX,
        paddingRight: node.paddingX
      });
    }
    if (hasOwn(node, "paddingY")) {
      lodash_default.defaults(node, {
        paddingTop: node.paddingY,
        paddingBottom: node.paddingY
      });
    }
    if (hasOwn(node, "padding")) {
      lodash_default.defaults(node, {
        paddingLeft: node.padding,
        paddingRight: node.padding,
        paddingTop: node.padding,
        paddingBottom: node.padding
      });
    }
    lodash_default.defaults(node, NODE_DEFAULT_ATTRS);
    lodash_default.each(["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"], (k) => {
      node[k] = Number(node[k]);
    });
    if (hasOwn(node, "width")) {
      node._prevWidth = node.width;
    }
    if (hasOwn(node, "height")) {
      node._prevHeight = node.height;
    }
  });
  g.edges().forEach((e) => {
    const edge = g.edge(e);
    if (!hasOwn(edge, "label")) {
      edge.label = "";
    }
    lodash_default.defaults(edge, EDGE_DEFAULT_ATTRS);
  });
}
function postProcessGraph(g) {
  lodash_default.each(g.nodes(), (v) => {
    const node = g.node(v);
    if (hasOwn(node, "_prevWidth")) {
      node.width = node._prevWidth;
    } else {
      delete node.width;
    }
    if (hasOwn(node, "_prevHeight")) {
      node.height = node._prevHeight;
    } else {
      delete node.height;
    }
    delete node._prevWidth;
    delete node._prevHeight;
  });
}
function createOrSelectGroup(root, name) {
  let selection = root.select("g." + name);
  if (selection.empty()) {
    selection = root.append("g").attr("class", name);
  }
  return selection;
}

// lib/version.ts
var version = "0.6.5-pre";
var version_default = version;

// index.ts
var dagreD3 = {
  graphlib: graphlib_default,
  dagre: dagre_default,
  intersect: intersect_default,
  render,
  util: util_exports,
  version: version_default
};
var index_default = dagreD3;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  dagre,
  graphlib,
  intersect,
  render,
  util,
  version
});
/*! For license information please see dagre-d3.cjs.js.LEGAL.txt */
//# sourceMappingURL=dagre-d3.cjs.js.map
