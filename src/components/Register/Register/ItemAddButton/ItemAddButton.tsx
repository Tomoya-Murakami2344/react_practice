import type { FC } from "react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

import resets from "../../_resets.module.css";
import classes from "./Component2_1.module.css";

interface Props {
  className?: string;
  classes?: {
    rectangle12?: string;
  };
  onClick?: () => void;
}
/* @figmaId 679:539 */
export const AddButton: FC<Props> = memo(function Component2_1(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div
        className={`${props.classes?.rectangle12 || ""} ${classes.rectangle12}`}
      ></div>
      <button
        className={classes.unnamed}
        onClick={() => {
          navigate("/Home");
          props.onClick && props.onClick();
        }}
      >
        追加
      </button>
    </div>
  );
});
