import { h, FunctionComponent } from "preact";
import { css } from "@linaria/core";
import { styled } from "@linaria/react";

const style = css`
  color: red;
  font-weight: 800;
`;

export const App: FunctionComponent = () => {
  return (
    <div className={style}>
      input要素
      <p>aaa</p>
    </div>
  );
};
