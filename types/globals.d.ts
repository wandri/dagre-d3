declare var require: any;
declare var module: any;
declare var process: any;
declare var phantom: any;
declare var chai: any;
declare var d3: any;
declare var dagreD3: any;
declare var _: any;
declare var describe: any;
declare var it: any;
declare var beforeEach: any;
declare var afterEach: any;

interface Window {
  dagre: any;
  graphlib: any;
}

interface SVGElement {
  getBBox(): DOMRect;
  getScreenCTM(): DOMMatrix | null;
}

declare module "webpage";
declare module "system";
