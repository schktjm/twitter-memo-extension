import { h } from "preact";
import { Close } from "../assets";
import { css } from "@linaria/core";

type Props = {
  onClick: () => void;
};

export const CloseButton = ({ onClick }: Props) => {
  return (
    <button type="button" className={wrapper} onClick={onClick}>
      <Close width={20} height={20} aria-hidden="true" />
      <span className={visuallyHidden}>キャンセル</span>
    </button>
  );
};

const wrapper = css`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid var(--color-black);
  background-color: white;
  color: var(--color-black);

  &:hover {
    background-color: var(--color-white-dark);
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
