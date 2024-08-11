import type { FC } from "react";
import { memo } from "react";

import { PullDownComponent } from "../../../PullDown/PullDownComponent";
import resets from "../../_resets.module.css";
import classes from "./Component1_Property1Frame1.module.css";

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  setCategory: (category: string) => void;
}
/* @figmaId 603:55 */
export const Component1_Property1Frame1: FC<Props> = memo(
  function Component1_Property1Frame1(props) {
    return (
      <div
        className={`${resets.clapyResets} ${props.classes?.root || ""} ${
          props.className || ""
        } ${classes.root}`}
      >
        <PullDownComponent
          className={classes.PullDown}
          setCategory={props.setCategory}
        />
      </div>
    );
  }
);
