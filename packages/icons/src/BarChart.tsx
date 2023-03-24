import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBarChart = (
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
    <path d="M12 20V10M18 20V4M6 20v-4" />
  </svg>
);
const ForwardRef = forwardRef(SvgBarChart);
export default ForwardRef;
