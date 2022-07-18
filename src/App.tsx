import { h, FunctionComponent } from "preact";
import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import { css } from "@linaria/core";

import { Input } from "./components/Input";
import { Note } from "./components/Note";
import "./global.css";
import { useDatabase } from "./lib/useDatabase";
import { getUserId } from "./lib/getUserId";

export const App: FunctionComponent = () => {
  const userId = getUserId();
  const text = useRef("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [editingText, setEditingText] = useState(text.current);
  const [isEditing, setIsEditing] = useState(false);
  const { setMemo, getMemo } = useDatabase();

  useEffect(() => {
    const memo = getMemo(userId);
    if (memo) {
      text.current = memo;
      setEditingText(text.current);
    }
  }, []);

  const setEditing = useCallback(() => {
    setIsEditing(true);
    setTimeout(() => {
      textareaRef.current && textareaRef.current.focus();
    }, 100);
  }, [textareaRef.current]);

  const submitText = useCallback(() => {
    text.current = editingText.trim();
    setEditingText(text.current);
    setMemo(userId, text.current);
    setIsEditing(false);
  }, [editingText]);

  const cancel = useCallback(() => {
    setEditingText(text.current);
    setIsEditing(false);
  }, [setEditingText]);

  return (
    <div className={wrapper}>
      <div className={isEditing ? "" : hidden}>
        <Input
          ref={textareaRef}
          text={editingText}
          onChangeText={(text) => setEditingText(text)}
          onSubmit={submitText}
          onCancel={cancel}
        />
      </div>
      <div className={isEditing ? hidden : ""}>
        <Note text={text.current} clickPencil={setEditing} />
      </div>
    </div>
  );
};

const wrapper = css`
  margin-top: 12px;
`;

const hidden = css`
  display: none;
`;
