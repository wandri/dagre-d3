"use strict";

import intersectCircle from "./intersect/intersect-circle";
import intersectEllipse from "./intersect/intersect-ellipse";
import intersectPolygon from "./intersect/intersect-polygon";
import intersectRect from "./intersect/intersect-rect";
import { Point, ShapeFn, ShapeMap } from "./types";

const rect: ShapeFn = (parent, bbox, node) => {
  const shapeSvg = parent.insert("rect", ":first-child")
    .attr("rx", node.rx)
    .attr("ry", node.ry)
    .attr("x", -bbox.width / 2)
    .attr("y", -bbox.height / 2)
    .attr("width", bbox.width)
    .attr("height", bbox.height);

  node.intersect = (point: Point) => {
    return intersectRect(node, point);
  };

  return shapeSvg;
};

const ellipse: ShapeFn = (parent, bbox, node) => {
  const rx = bbox.width / 2;
  const ry = bbox.height / 2;
  const shapeSvg = parent.insert("ellipse", ":first-child")
    .attr("x", -bbox.width / 2)
    .attr("y", -bbox.height / 2)
    .attr("rx", rx)
    .attr("ry", ry);

  node.intersect = (point: Point) => {
    return intersectEllipse(node, rx, ry, point);
  };

  return shapeSvg;
};

const circle: ShapeFn = (parent, bbox, node) => {
  const r = Math.max(bbox.width, bbox.height) / 2;
  const shapeSvg = parent.insert("circle", ":first-child")
    .attr("x", -bbox.width / 2)
    .attr("y", -bbox.height / 2)
    .attr("r", r);

  node.intersect = (point: Point) => {
    return intersectCircle(node, r, point);
  };

  return shapeSvg;
};

// Circumscribe an ellipse for the bounding box with a diamond shape. I derived
// the function to calculate the diamond shape from:
// http://mathforum.org/kb/message.jspa?messageID=3750236
const diamond: ShapeFn = (parent, bbox, node) => {
  const w = (bbox.width * Math.SQRT2) / 2;
  const h = (bbox.height * Math.SQRT2) / 2;
  const points = [
    { x:  0, y: -h },
    { x: -w, y:  0 },
    { x:  0, y:  h },
    { x:  w, y:  0 }
  ];
  const shapeSvg = parent.insert("polygon", ":first-child")
    .attr("points", points.map((p) => p.x + "," + p.y).join(" "));

  node.intersect = (p: Point) => {
    return intersectPolygon(node, points, p);
  };

  return shapeSvg;
};

const shapes: ShapeMap = {
  rect,
  ellipse,
  circle,
  diamond
};

export { rect, ellipse, circle, diamond };
export default shapes;
