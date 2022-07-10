import { h, ComponentChildren } from "preact";
import { css, LinariaClassName } from "@linaria/core";
import { Checkmark, Close, Pencil } from "../assets";

type Icon = "checkmark" | "close" | "pencil";

type Props = {
  type?: string;
  icon: Icon;
  onClick: () => void;
};

type IconProps = {
  type: Icon;
};

const Icon = ({ type }: IconProps) => {
  switch (type) {
    case "checkmark":
      return <Checkmark />;
    case "close":
      return <Close />;
    case "pencil":
      return <Pencil />;
  }
};

export const ButtonIcon = ({ type = "button", icon, onClick }: Props) => {
  return (
    <button type={type} className={wrapper} onClick={onClick}>
      <Icon type={icon} />
    </button>
  );
};

const wrapper = css`
  color: rgb(29, 155, 240);
  width: 2rem;
  height: 2rem;
`;
