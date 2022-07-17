import { h } from "preact";
import { Pencil } from "../assets";
import { css } from "@linaria/core";

type Props = {
  onClick: () => void;
};

export const PencilButton = ({ onClick }: Props) => {
  return (
    <button type="button" className={wrapper} onClick={onClick}>
      <Pencil width={14} height={14} aria-hidden="true" />
      <span className={visuallyHidden}>編集する</span>
    </button>
  );
};

const wrapper = css`
  cursor: pointer;
`;

const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  clip: rect(1px, 1px, 1px, 1px);
`;
