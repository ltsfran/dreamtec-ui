import { __spreadValues } from './chunk-NXJS66U5.mjs';
import * as React from 'react';
import { forwardRef } from 'react';

var SvgArrowUpCircle = (props, ref) => /* @__PURE__ */ React.createElement(
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
  /* @__PURE__ */ React.createElement("circle", { cx: 12, cy: 12, r: 10 }),
  /* @__PURE__ */ React.createElement("path", { d: "m16 12-4-4-4 4M12 16V8" })
);
var ForwardRef = forwardRef(SvgArrowUpCircle);
var ArrowUpCircle_default = ForwardRef;

export { ArrowUpCircle_default };
