import { h, FunctionComponent } from "preact";
import { useCallback, useRef, useState } from "preact/hooks";

import { Input } from "./components/Input";
import { css } from "@linaria/core";
import { Note } from "./components/Note";

export const App: FunctionComponent = () => {
  const text = useRef("");
  const [editingText, setEditingText] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const submitText = useCallback(() => {
    text.current = editingText;
    setIsEditing(false);
  }, [editingText]);

  const cancel = useCallback(() => {
    setEditingText(text.current);
    setIsEditing(false);
  }, [setEditingText]);

  return (
    <div className={wrapper}>
      {isEditing ? (
        <Input
          text={editingText}
          onChangeText={(text) => setEditingText(text)}
          onSubmit={submitText}
          onCancel={cancel}
        />
      ) : (
        <Note text={text.current} clickPencil={() => setIsEditing(true)} />
      )}
    </div>
  );
};

const wrapper = css``;
