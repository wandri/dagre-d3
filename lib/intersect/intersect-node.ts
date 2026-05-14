import { Point } from "../types";

export default function intersectNode(node: any, point: Point): Point {
  return node.intersect(point);
}
