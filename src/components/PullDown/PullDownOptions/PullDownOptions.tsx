import type { FC } from "react";
import { memo } from "react";

import resets from "../../_resets.module.css";
import { Frame3_Property1Default } from "../Frame3_Property1Default/Frame3_Property1Default";
import classes from "./PullDownOptions.module.css";

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  chooseOption: (event: any) => void;
  // 長さが3の文字列の配列
  genre?: string;
}
/* @figmaId 603:74 */
export const PullDownOptions: FC<Props> = memo(function Frame5(
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
        text={props.genre == "優先度" ? "高" : "野菜"}
      />
      <Frame3_Property1Default
        className={classes.frame4}
        chooseOption={props.chooseOption}
        text={props.genre == "優先度" ? "中" : "タンパク質"}
      />
      <Frame3_Property1Default
        className={classes.frame5}
        chooseOption={props.chooseOption}
        text={props.genre == "優先度" ? "低" : "きのこ"}
      />
    </div>
  );
});
