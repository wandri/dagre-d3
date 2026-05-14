import _ from "./lodash";
import { EdgeObject, GraphLike, SelectionLike } from "./types";

// Public utility functions
/*
 * Returns true if the specified node in the graph is a subgraph node. A
 * subgraph node is one that contains other nodes.
 */
export function isSubgraph(g: GraphLike, v: string): boolean {
  return !!g.children(v).length;
}

export function edgeToId(e: EdgeObject): string {
  return escapeId(e.v) + ":" + escapeId(e.w) + ":" + escapeId(e.name);
}

export function hasOwn(object: object, property: string): boolean {
  return Object.prototype.hasOwnProperty.call(object, property);
}

const ID_DELIM = /:/g;
function escapeId(str: string | undefined): string {
  return str ? String(str).replace(ID_DELIM, "\\:") : "";
}

export function applyStyle(dom: SelectionLike, styleFn: any): void {
  if (styleFn) {
    dom.attr("style", styleFn);
  }
}

export function applyClass(dom: SelectionLike, classFn: any, otherClasses: string): void {
  if (classFn) {
    dom
      .attr("class", classFn)
      .attr("class", otherClasses + " " + dom.attr("class"));
  }
}

export function applyTransition(selection: SelectionLike, g: GraphLike): SelectionLike {
  const graph = g.graph();

  if (_.isPlainObject(graph)) {
    const transition = graph.transition;
    if (_.isFunction(transition)) {
      return transition(selection);
    }
  }

  return selection;
}

export default {
  isSubgraph,
  edgeToId,
  applyStyle,
  applyClass,
  applyTransition,
  hasOwn
};
