import { __spreadValues } from './chunk-NXJS66U5.mjs';
import * as React from 'react';
import { forwardRef } from 'react';

var SvgClock = (props, ref) => /* @__PURE__ */ React.createElement(
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
  /* @__PURE__ */ React.createElement("path", { d: "M12 6v6l4 2" })
);
var ForwardRef = forwardRef(SvgClock);
var Clock_default = ForwardRef;

export { Clock_default };
