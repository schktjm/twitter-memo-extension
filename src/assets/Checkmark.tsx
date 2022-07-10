import { css } from "@linaria/core";
import { h } from "preact";

export const Checkmark = () => {
  return (
    <svg strokeWidth="2" viewBox="0 0 24 24" fill="none" className={style}>
      <path
        d="M5 13L9 17L19 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const style = css`
  width: 1.2rem;
  height: 1.2rem;
`;
