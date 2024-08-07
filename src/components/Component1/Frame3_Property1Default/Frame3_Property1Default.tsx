import type { FC } from "react";
import { memo } from "react";

import resets from "../../_resets.module.css";
import classes from "./Frame3_Property1Default.module.css";

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: string;
  chooseOption: (event: any) => void;
}
/* @figmaId 603:59 */
export const Frame3_Property1Default: FC<Props> = memo(
  function Frame3_Property1Default(props = { chooseOption: (e: any) => {} }) {
    return (
      <div
        className={`${resets.clapyResets} ${props.classes?.root || ""} ${
          props.className || ""
        } ${classes.root}`}
      >
        {props.text ? (
          <button className={classes.unnamed} onClick={props.chooseOption}>
            {props.text}
          </button>
        ) : (
          <button className={classes.unnamed} onClick={props.chooseOption}>
            野菜
          </button>
        )}
      </div>
    );
  }
);
