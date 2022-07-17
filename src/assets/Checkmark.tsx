import { h } from "preact";
import { SVGProps } from "../types";

export const Checkmark = (props: SVGProps) => {
  return (
    <svg stroke-width="2" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5 13L9 17L19 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
