import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgAnchor = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <circle cx={12} cy={5} r={3} />
    <path d="M12 22V8M5 12H2a10 10 0 0 0 20 0h-3" />
  </svg>
);
const ForwardRef = forwardRef(SvgAnchor);
export default ForwardRef;
