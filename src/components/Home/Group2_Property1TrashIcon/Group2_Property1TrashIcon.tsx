import type { FC } from "react";
import { memo } from "react";

import resets from "../../_resets.module.css";
import { _labelTrash } from "../_labelTrash/_labelTrash";
import classes from "./Group2_Property1TrashIcon.module.css";

interface Props {
  className?: string;
  classes?: {
    trashIcon?: string;
    root?: string;
  };
}
/* @figmaId 679:810 */
export const Group2_Property1TrashIcon: FC<Props> = memo(
  function Group2_Property1TrashIcon(props = {}) {
    return (
      <div
        className={`${resets.clapyResets} ${props.classes?.root || ""} ${
          props.className || ""
        } ${classes.root}`}
      >
        <div className={classes.frame2}>
          <_labelTrash
            className={classes.unnamed}
            classes={{
              trashIcon: `${props.classes?.trashIcon || ""} ${
                classes.rectangle13
              }`,
            }}
          />
          <button className={classes.unnamed2}>削除</button>
        </div>
      </div>
    );
  }
);
