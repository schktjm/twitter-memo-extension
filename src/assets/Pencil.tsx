import { css } from "@linaria/core";
import { h } from "preact";

export const Pencil = () => {
  return (
    <svg strokeWidth="1.5" viewBox="0 0 24 24" fill="none" className={style}>
      <path
        d="M13.0207 5.82839L15.8491 2.99996L20.7988 7.94971L17.9704 10.7781M13.0207 5.82839L3.41405 15.435C3.22652 15.6225 3.12116 15.8769 3.12116 16.1421V20.6776H7.65669C7.92191 20.6776 8.17626 20.5723 8.3638 20.3847L17.9704 10.7781M13.0207 5.82839L17.9704 10.7781"
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
