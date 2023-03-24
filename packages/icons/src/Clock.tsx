import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgClock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <circle cx={12} cy={12} r={10} />
    <path d="M12 6v6l4 2" />
  </svg>
);
const ForwardRef = forwardRef(SvgClock);
export default ForwardRef;
