import circle from "./intersect-circle";
import ellipse from "./intersect-ellipse";
import node from "./intersect-node";
import polygon from "./intersect-polygon";
import rect from "./intersect-rect";

const intersect = {
  node,
  circle,
  ellipse,
  polygon,
  rect
};

export { node, circle, ellipse, polygon, rect };
export default intersect;
