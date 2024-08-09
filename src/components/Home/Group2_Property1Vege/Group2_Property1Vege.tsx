import type { FC } from "react";
import { memo } from "react";

import { ItemList } from "../../../interface/ItemList";
import resets from "../../_resets.module.css";
import classes from "./Group2_Property1Vege.module.css";

interface Props {
  className?: string;
  classes?: {
    rectangle8?: string;
    root?: string;
  };
  Item: ItemList;
}
/* @figmaId 601:23 */
export const Group2_Property1Vege: FC<Props> = memo(
  function Group2_Property1Vege(props) {
    const itemImage = ((item: ItemList) => {
      if (item.category === "野菜") return classes.vege;
      if (item.category === "タンパク質") return classes.protein;
      if (item.category === "きのこ") return classes.mush;
    })(props.Item);
    return (
      <div
        className={`${resets.clapyResets} ${props.classes?.root || ""} ${
          props.className || ""
        } ${classes.root}`}
      >
        <div className={classes.frame2}>
          <div
            className={itemImage}
          ></div>
          <div className={classes.unnamed}>{props.Item?.name}</div>
        </div>
      </div>
    );
  }
);
