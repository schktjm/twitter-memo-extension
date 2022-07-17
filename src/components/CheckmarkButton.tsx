import { h } from "preact";
import { Checkmark } from "../assets";
import { css } from "@linaria/core";

type Props = {
  onClick: () => void;
};

export const CheckmarkButton = ({ onClick }: Props) => {
  return (
    <button type="button" className={wrapper} onClick={onClick}>
      <Checkmark width={20} height={20} aria-hidden="true" />
      <span className={visuallyHidden}>保存する</span>
    </button>
  );
};

const wrapper = css`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background-color: var(--color-blue);
  border-radius: 50%;
  color: white;

  &:hover {
    background-color: var(--color-blue-dark);
  }
`;

const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  clip: rect(1px, 1px, 1px, 1px);
`;
