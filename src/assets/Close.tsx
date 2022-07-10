import { css } from "@linaria/core";
import { h } from "preact";

export const Close = () => {
  return (
    <svg strokeWidth="2" viewBox="0 0 24 24" fill="none" className={style}>
      <path
        d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
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
