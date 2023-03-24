'use strict';

var React4 = require('react');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React4__namespace = /*#__PURE__*/_interopNamespace(React4);

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var SvgAdd = (props, ref) => /* @__PURE__ */ React4__namespace.createElement(
  "svg",
  __spreadValues({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props),
  /* @__PURE__ */ React4__namespace.createElement(
    "path",
    {
      d: "M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1Z",
      fill: "currentColor"
    }
  )
);
var ForwardRef = React4.forwardRef(SvgAdd);
var Add_default = ForwardRef;
var SvgAlertOctagon = (props, ref) => /* @__PURE__ */ React4__namespace.createElement(
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
  /* @__PURE__ */ React4__namespace.createElement("path", { d: "M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2zM12 8v4M12 16h.01" })
);
var ForwardRef2 = React4.forwardRef(SvgAlertOctagon);
var AlertOctagon_default = ForwardRef2;
var SvgAlertTriangle = (props, ref) => /* @__PURE__ */ React4__namespace.createElement(
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
  /* @__PURE__ */ React4__namespace.createElement("path", { d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01" })
);
var ForwardRef3 = React4.forwardRef(SvgAlertTriangle);
var AlertTriangle_default = ForwardRef3;
var SvgAnchor = (props, ref) => /* @__PURE__ */ React4__namespace.createElement(
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
  /* @__PURE__ */ React4__namespace.createElement("circle", { cx: 12, cy: 5, r: 3 }),
  /* @__PURE__ */ React4__namespace.createElement("path", { d: "M12 22V8M5 12H2a10 10 0 0 0 20 0h-3" })
);
var ForwardRef4 = React4.forwardRef(SvgAnchor);
var Anchor_default = ForwardRef4;
var SvgArrowUpCircle = (props, ref) => /* @__PURE__ */ React4__namespace.createElement(
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
  /* @__PURE__ */ React4__namespace.createElement("circle", { cx: 12, cy: 12, r: 10 }),
  /* @__PURE__ */ React4__namespace.createElement("path", { d: "m16 12-4-4-4 4M12 16V8" })
);
var ForwardRef5 = React4.forwardRef(SvgArrowUpCircle);
var ArrowUpCircle_default = ForwardRef5;
var SvgBarChart = (props, ref) => /* @__PURE__ */ React4__namespace.createElement(
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
  /* @__PURE__ */ React4__namespace.createElement("path", { d: "M12 20V10M18 20V4M6 20v-4" })
);
var ForwardRef6 = React4.forwardRef(SvgBarChart);
var BarChart_default = ForwardRef6;
var SvgBookOpen = (props, ref) => /* @__PURE__ */ React4__namespace.createElement(
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
  /* @__PURE__ */ React4__namespace.createElement("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })
);
var ForwardRef7 = React4.forwardRef(SvgBookOpen);
var BookOpen_default = ForwardRef7;
var SvgBookmark = (props, ref) => /* @__PURE__ */ React4__namespace.createElement(
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
  /* @__PURE__ */ React4__namespace.createElement("path", { d: "m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" })
);
var ForwardRef8 = React4.forwardRef(SvgBookmark);
var Bookmark_default = ForwardRef8;
var SvgCheckCircle = (props, ref) => /* @__PURE__ */ React4__namespace.createElement(
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
  /* @__PURE__ */ React4__namespace.createElement("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
  /* @__PURE__ */ React4__namespace.createElement("path", { d: "M22 4 12 14.01l-3-3" })
);
var ForwardRef9 = React4.forwardRef(SvgCheckCircle);
var CheckCircle_default = ForwardRef9;
var SvgChevronRight = (props, ref) => /* @__PURE__ */ React4__namespace.createElement(
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
  /* @__PURE__ */ React4__namespace.createElement("path", { d: "m9 18 6-6-6-6" })
);
var ForwardRef10 = React4.forwardRef(SvgChevronRight);
var ChevronRight_default = ForwardRef10;
var SvgChevronUp = (props, ref) => /* @__PURE__ */ React4__namespace.createElement(
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
  /* @__PURE__ */ React4__namespace.createElement("path", { d: "m18 15-6-6-6 6" })
);
var ForwardRef11 = React4.forwardRef(SvgChevronUp);
var ChevronUp_default = ForwardRef11;
var SvgChevronsDown = (props, ref) => /* @__PURE__ */ React4__namespace.createElement(
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
  /* @__PURE__ */ React4__namespace.createElement("path", { d: "m7 13 5 5 5-5M7 6l5 5 5-5" })
);
var ForwardRef12 = React4.forwardRef(SvgChevronsDown);
var ChevronsDown_default = ForwardRef12;
var SvgChevronsLeft = (props, ref) => /* @__PURE__ */ React4__namespace.createElement(
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
  /* @__PURE__ */ React4__namespace.createElement("path", { d: "m11 17-5-5 5-5M18 17l-5-5 5-5" })
);
var ForwardRef13 = React4.forwardRef(SvgChevronsLeft);
var ChevronsLeft_default = ForwardRef13;
var SvgClock = (props, ref) => /* @__PURE__ */ React4__namespace.createElement(
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
  /* @__PURE__ */ React4__namespace.createElement("circle", { cx: 12, cy: 12, r: 10 }),
  /* @__PURE__ */ React4__namespace.createElement("path", { d: "M12 6v6l4 2" })
);
var ForwardRef14 = React4.forwardRef(SvgClock);
var Clock_default = ForwardRef14;

exports.Add = Add_default;
exports.AlertOctagon = AlertOctagon_default;
exports.AlertTriangle = AlertTriangle_default;
exports.Anchor = Anchor_default;
exports.ArrowUpCircle = ArrowUpCircle_default;
exports.BarChart = BarChart_default;
exports.BookOpen = BookOpen_default;
exports.Bookmark = Bookmark_default;
exports.CheckCircle = CheckCircle_default;
exports.ChevronRight = ChevronRight_default;
exports.ChevronUp = ChevronUp_default;
exports.ChevronsDown = ChevronsDown_default;
exports.ChevronsLeft = ChevronsLeft_default;
exports.Clock = Clock_default;
