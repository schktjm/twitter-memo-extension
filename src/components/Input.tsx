import { css } from "@linaria/core";
import { h } from "preact";
import { CheckmarkButton } from "./CheckmarkButton";
import { CloseButton } from "./CloseButton";

type Props = {
  text: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
};

export const Input = ({ text, onChangeText, onSubmit, onCancel }: Props) => {
  // NOTE: https://github.com/preactjs/preact/issues/1930
  const handleChangeText = (e: any) => {
    const el = (e.currentTarget as HTMLInputElement).value;
    onChangeText(el);
  };

  return (
    <div className={wrapper}>
      <input
        type="text"
        value={text}
        placeholder="hogehoge"
        className={textStyle}
        onInput={handleChangeText}
      />
      <div>
        <CheckmarkButton onClick={onSubmit} />
        <CloseButton onClick={onCancel} />
      </div>
    </div>
  );
};

const wrapper = css`
  display: flex;
`;

const textStyle = css`
  flex-grow: 1;
`;
