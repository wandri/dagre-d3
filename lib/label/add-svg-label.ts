import * as util from "../util";
import { SelectionLike } from "../types";

export default function addSVGLabel(root: SelectionLike, node: any): SelectionLike {
  const domNode = root;

  (domNode.node() as SVGElement).appendChild(node.label);

  util.applyStyle(domNode, node.labelStyle);

  return domNode;
}
