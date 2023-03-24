import { __spreadValues } from './chunk-NXJS66U5.mjs';
import * as React from 'react';
import { forwardRef } from 'react';

var SvgAnchor = (props, ref) => /* @__PURE__ */ React.createElement(
  "svg",
  __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ref
  }, props),
  /* @__PURE__ */ React.createElement("circle", { cx: 12, cy: 5, r: 3 }),
  /* @__PURE__ */ React.createElement("path", { d: "M12 22V8M5 12H2a10 10 0 0 0 20 0h-3" })
);
var ForwardRef = forwardRef(SvgAnchor);
var Anchor_default = ForwardRef;

export { Anchor_default };
