import type { FC } from "react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

import resets from "../../_resets.module.css";
import classes from "./Component2_12.module.css";

interface Props {
  className?: string;
  classes?: {
    rectangle12?: string;
    root?: string;
  };
}
/* @figmaId 679:539 */
export const Component2_12: FC<Props> = memo(function Component2_12(
  props = {}
) {
  const navigate = useNavigate();
  return (
    <div
      className={`${resets.clapyResets} ${props.classes?.root || ""} ${
        props.className || ""
      } ${classes.root}`}
    >
      <div
        className={`${props.classes?.rectangle12 || ""} ${classes.rectangle12}`}
      ></div>
      <button
        className={classes.unnamed}
        onClick={() => {
          navigate("/Register");
        }}
      >
        追加画面へ
      </button>
    </div>
  );
});
