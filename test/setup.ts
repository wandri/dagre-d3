class SVGMatrixStub {
  a = 1;
  b = 0;
  c = 0;
  d = 1;
  e = 0;
  f = 0;

  inverse(): SVGMatrixStub {
    return this;
  }

  multiply(): SVGMatrixStub {
    return this;
  }

  translate(x: number, y: number): SVGMatrixStub {
    const translated = new SVGMatrixStub();
    translated.e = this.e + x;
    translated.f = this.f + y;
    return translated;
  }
}

function textWidth(text: string): number {
  return Math.max(text.length * 8, 1);
}

Object.defineProperty(SVGElement.prototype, "getBBox", {
  configurable: true,
  value: function getBBox() {
    const element = this as SVGElement;
    const tagName = element.tagName.toLowerCase();

    if (tagName === "rect" || tagName === "foreignobject") {
      return {
        x: Number(element.getAttribute("x") || 0),
        y: Number(element.getAttribute("y") || 0),
        width: Number(element.getAttribute("width") || 0),
        height: Number(element.getAttribute("height") || 0)
      };
    }

    if (tagName === "circle") {
      const r = Number(element.getAttribute("r") || 0);
      return { x: -r, y: -r, width: r * 2, height: r * 2 };
    }

    if (tagName === "ellipse") {
      const rx = Number(element.getAttribute("rx") || 0);
      const ry = Number(element.getAttribute("ry") || 0);
      return { x: -rx, y: -ry, width: rx * 2, height: ry * 2 };
    }

    if (tagName === "text") {
      return { x: 0, y: 0, width: textWidth(element.textContent || ""), height: 16 };
    }

    const children = Array.from(element.children) as SVGElement[];
    if (!children.length) {
      return { x: 0, y: 0, width: textWidth(element.textContent || ""), height: 16 };
    }

    const boxes = children.map((child) => child.getBBox());
    const minX = Math.min(...boxes.map((box) => box.x), 0);
    const minY = Math.min(...boxes.map((box) => box.y), 0);
    const maxX = Math.max(...boxes.map((box) => box.x + box.width), 0);
    const maxY = Math.max(...boxes.map((box) => box.y + box.height), 0);
    return { x: minX, y: minY, width: maxX - minX, height: maxY - minY };
  }
});

Object.defineProperty(SVGElement.prototype, "getScreenCTM", {
  configurable: true,
  value: () => new SVGMatrixStub()
});
