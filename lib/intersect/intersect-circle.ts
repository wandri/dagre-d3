import { Point } from "../types";
import intersectEllipse from "./intersect-ellipse";

export default function intersectCircle(node: any, rx: number, point: Point): Point {
  return intersectEllipse(node, rx, rx, point);
}
