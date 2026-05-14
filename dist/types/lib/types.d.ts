export interface Point {
    x: number;
    y: number;
}
export interface EdgeObject {
    v: string;
    w: string;
    name?: string;
}
export interface GraphLike {
    children(v: string): string[];
    edge(e: EdgeObject): any;
    edges(): EdgeObject[];
    graph(): any;
    node(v: string): any;
    nodes(): string[];
}
export interface Size {
    width: number;
    height: number;
}
export type SelectionLike = Selection<BaseType, any, BaseType, any>;
export type TransitionLike = Transition<BaseType, any, BaseType, any>;
export type ShapeFn = (parent: SelectionLike, bbox: Size, node: any) => SelectionLike;
export type ShapeMap = Record<string, ShapeFn>;
export type ArrowFn = (parent: SelectionLike, id: string, edge: any, type: string) => void;
export type ArrowMap = Record<string, ArrowFn>;
export interface RenderFn {
    (svg: SelectionLike, g: GraphLike): void;
    createNodes(): any;
    createNodes(value: any): RenderFn;
    createClusters(): any;
    createClusters(value: any): RenderFn;
    createEdgeLabels(): any;
    createEdgeLabels(value: any): RenderFn;
    createEdgePaths(): any;
    createEdgePaths(value: any): RenderFn;
    shapes(): ShapeMap;
    shapes(value: ShapeMap): RenderFn;
    arrows(): ArrowMap;
    arrows(value: ArrowMap): RenderFn;
}
import { BaseType, Selection, Transition } from "d3";
//# sourceMappingURL=types.d.ts.map