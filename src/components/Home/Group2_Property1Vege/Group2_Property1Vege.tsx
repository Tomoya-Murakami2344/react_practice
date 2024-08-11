import type { FC } from "react";
import { memo } from "react";

import { useEffect, useState } from "react";
import { firebase } from "../../../db/firebase";
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
    const [name, setName] = useState<string>(props.Item?.name || "");
    const FB = new firebase("posts");
    useEffect(() => {
      setName(props.Item?.name || "");
    }, [props.Item]);
    return (
      <div
        className={`${resets.clapyResets} ${props.classes?.root || ""} ${
          props.className || ""
        } ${classes.root}`}
      >
        <div className={classes.frame2}>
          <div className={itemImage}></div>
          {/* <div className={classes.unnamed}>{props.Item?.name}</div> */}
          <input
            className={classes.unnamed}
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              // documentId のデータを更新する
              FB.update(props.Item.documentId, { name: event.target.value });
            }}
          ></input>
        </div>
      </div>
    );
  }
);
