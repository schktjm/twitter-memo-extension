import { css } from "@linaria/core";
import { h } from "preact";
import { PencilButton } from "./PencilButton";

type Props = {
  text: string;
  clickPencil: () => void;
};

export const Note = ({ text, clickPencil }: Props) => {
  return (
    <div className={wrapper}>
      <div>{text}</div>
      <PencilButton onClick={clickPencil} />
    </div>
  );
};

const wrapper = css`
  display: flex;
`;
