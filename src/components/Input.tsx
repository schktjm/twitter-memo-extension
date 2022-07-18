import { css } from "@linaria/core";
import { h } from "preact";
import { forwardRef } from "preact/compat";
import { CheckmarkButton } from "./CheckmarkButton";
import { CloseButton } from "./CloseButton";

type Props = {
  text: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
};

export const Input = forwardRef<HTMLTextAreaElement, Props>(
  ({ text, onChangeText, onSubmit, onCancel }, ref) => {
    // NOTE: https://github.com/preactjs/preact/issues/1930
    const handleChangeText = (e: any) => {
      const el = (e.currentTarget as HTMLTextAreaElement).value;
      onChangeText(el);
    };

    const handleKeydownSubmit = (e: KeyboardEvent) => {
      if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
        onSubmit();
      }

      if (e.key === "Escape") {
        // onCancel が呼ばれずに focus が外れちゃう
        e.preventDefault();
        onCancel();
      }
    };

    return (
      <div className={wrapper}>
        <div className={textareaWrapper}>
          <div className={dummyText} aria-hidden="true">
            {text + "\u200b"}
          </div>
          <textarea
            ref={ref}
            value={text}
            onChange={handleChangeText}
            rows={4}
            cols={124}
            className={textarea}
            onKeyDown={handleKeydownSubmit}
          />
        </div>
        <div className={buttonWrapper}>
          <CheckmarkButton onClick={onSubmit} />
          <CloseButton onClick={onCancel} />
        </div>
      </div>
    );
  }
);

const wrapper = css`
  display: flex;
  flex-direction: column;
`;

const textareaWrapper = css`
  position: relative;
`;

const dummyText = css`
  visibility: hidden;
  overflow: hidden;
  min-height: 120px;
  max-height: 480px;
  padding: 12px;
  white-space: pre-wrap;
  box-sizing: border-box;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;
const textarea = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  color: var(--color-black);
  background-color: var(--color-grey-light);
  border: none;
  border-radius: 8px;
  padding: 12px;
  resize: none;
  font: inherit;
  letter-spacing: inherit;
`;

const buttonWrapper = css`
  display: flex;
  justify-content: flex-end;
  column-gap: 16px;
  margin-top: 6px;
`;

const textStyle = css`
  flex-grow: 1;
`;
