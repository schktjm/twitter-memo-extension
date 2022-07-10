import { css } from "@linaria/core";
import { h } from "preact";
import { ButtonIcon } from "./ButtonIcon";

type Props = {
  text: string;
  clickPencil: () => void;
};

export const Note = ({ text, clickPencil }: Props) => {
  return (
    <div className={wrapper}>
      <div>{text}</div>
      <ButtonIcon icon="pencil" onClick={clickPencil} />
    </div>
  );
};

const wrapper = css`
  display: flex;
`;
