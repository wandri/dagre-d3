import { EdgeObject, GraphLike, SelectionLike } from "./types";
export declare function isSubgraph(g: GraphLike, v: string): boolean;
export declare function edgeToId(e: EdgeObject): string;
export declare function hasOwn(object: object, property: string): boolean;
export declare function applyStyle(dom: SelectionLike, styleFn: any): void;
export declare function applyClass(dom: SelectionLike, classFn: any, otherClasses: string): void;
export declare function applyTransition(selection: SelectionLike, g: GraphLike): SelectionLike;
declare const _default: {
    isSubgraph: typeof isSubgraph;
    edgeToId: typeof edgeToId;
    applyStyle: typeof applyStyle;
    applyClass: typeof applyClass;
    applyTransition: typeof applyTransition;
    hasOwn: typeof hasOwn;
};
export default _default;
//# sourceMappingURL=util.d.ts.map