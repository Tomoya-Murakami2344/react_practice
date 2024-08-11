import type { FC, ReactNode } from "react";
import { memo } from "react";

import resets from "../../_resets.module.css";
import classes from "./LoginButton.module.css";

interface Props {
  className?: string;
  classes?: {
    rectangle12?: string;
  };
  text?: {
    unnamed?: ReactNode;
  };
  onClick?: () => void;
}
/* @figmaId 679:539 */
export const LoginButton: FC<Props> = memo(function Component2_1(props = {}) {
  return (
    <button
      className={`${resets.clapyResets} ${classes.root}`}
      onClick={props.onClick}
    >
      <div
        className={`${props.classes?.rectangle12 || ""} ${classes.rectangle12}`}
      ></div>
      {props.text?.unnamed != null ? (
        props.text?.unnamed
      ) : (
        <div className={classes.unnamed}>追加</div>
      )}
    </button>
  );
});
