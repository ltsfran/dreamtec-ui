import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgChevronsDown = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    ref={ref}
    {...props}
  >
    <path d="m7 13 5 5 5-5M7 6l5 5 5-5" />
  </svg>
);
const ForwardRef = forwardRef(SvgChevronsDown);
export default ForwardRef;
