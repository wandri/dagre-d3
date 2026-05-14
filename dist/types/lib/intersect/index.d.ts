import circle from "./intersect-circle";
import ellipse from "./intersect-ellipse";
import node from "./intersect-node";
import polygon from "./intersect-polygon";
import rect from "./intersect-rect";
declare const intersect: {
    node: typeof node;
    circle: typeof circle;
    ellipse: typeof ellipse;
    polygon: typeof polygon;
    rect: typeof rect;
};
export { node, circle, ellipse, polygon, rect };
export default intersect;
//# sourceMappingURL=index.d.ts.map