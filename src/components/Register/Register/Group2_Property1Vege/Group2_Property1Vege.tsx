import type { FC } from "react";
import { memo } from "react";

import { useState } from "react";
import resets from "../../_resets.module.css";
import classes from "./Group2_Property1Vege.module.css";

interface Props {
  className?: string;
  classes?: {
    rectangle8?: string;
    root?: string;
  };
  setName: (value: string) => void;
}
/* @figmaId 601:23 */
export const Group2_Property1Vege: FC<Props> = memo(
  function Group2_Property1Vege(props) {
    const [inputValue, setInputValue] = useState("");
    return (
      <div
        className={`${resets.clapyResets} ${props.classes?.root || ""} ${
          props.className || ""
        } ${classes.root}`}
      >
        <div className={classes.frame2}>
          <div
            className={`${props.classes?.rectangle8 || ""} ${
              classes.rectangle8
            }`}
          ></div>
          <input
            type="text"
            className={classes.unnamed}
            placeholder="名称"
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={() => props.setName(inputValue)}
          />
        </div>
      </div>
    );
  }
);
