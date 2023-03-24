import { __spreadValues } from './chunk-NXJS66U5.mjs';
import * as React from 'react';
import { forwardRef } from 'react';

var SvgBarChart = (props, ref) => /* @__PURE__ */ React.createElement(
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
  /* @__PURE__ */ React.createElement("path", { d: "M12 20V10M18 20V4M6 20v-4" })
);
var ForwardRef = forwardRef(SvgBarChart);
var BarChart_default = ForwardRef;

export { BarChart_default };
