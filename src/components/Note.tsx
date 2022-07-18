import { css } from "@linaria/core";
import { h } from "preact";
import { PencilButton } from "./PencilButton";

type Props = {
  text: string;
  clickPencil: () => void;
};

export const Note = ({ text, clickPencil }: Props) => {
  const isNoText = text === "";

  return (
    <div className={wrapper} onClick={clickPencil}>
      {isNoText ? (
        <div className={noText}>メモがありません。</div>
      ) : (
        <div className={textWrapper}>{text}</div>
      )}
      <div className={buttonWrapper}>
        <PencilButton />
      </div>
    </div>
  );
};

const wrapper = css`
  display: flex;
  align-items: flex-end;
`;

const textWrapper = css`
  color: var(--color-black);
  white-space: pre-wrap;
  box-sizing: border-box;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const noText = css`
  color: #bdbdbd;
`;

const buttonWrapper = css`
  margin-left: 12px;
`;
