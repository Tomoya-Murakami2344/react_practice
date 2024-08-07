import type { FC } from "react";
import { memo } from "react";

import resets from "../../_resets.module.css";
import { Frame3_Property1Default } from "../Frame3_Property1Default/Frame3_Property1Default";
import classes from "./Frame5.module.css";

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  chooseOption: (event: any) => void;
}
/* @figmaId 603:74 */
export const Frame5: FC<Props> = memo(function Frame5(
  props = { chooseOption: (e: any) => {} }
) {
  return (
    <div
      className={`${resets.clapyResets} ${props.classes?.root || ""} ${
        props.className || ""
      } ${classes.root}`}
    >
      <Frame3_Property1Default
        className={classes.frame3}
        chooseOption={props.chooseOption}
      />
      <Frame3_Property1Default
        className={classes.frame4}
        chooseOption={props.chooseOption}
        text="タンパク質"
      />
      <Frame3_Property1Default
        className={classes.frame5}
        chooseOption={props.chooseOption}
        text="きのこ"
        // text={{
        //   unnamed: <div className={classes.unnamed}>きのこ</div>,
        // }}
      />
    </div>
  );
});
