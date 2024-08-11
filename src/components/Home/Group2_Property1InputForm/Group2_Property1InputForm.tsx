import type { FC, ReactNode } from "react";
import { memo } from "react";

import { useEffect, useState } from "react";
import { firebase } from "../../../db/firebase";
import { ItemList } from "../../../interface/ItemList";
import resets from "../../_resets.module.css";
import { _label } from "../_label/_label";
import classes from "./Group2_Property1InputForm.module.css";

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    unnamed?: ReactNode;
  };
  Item: ItemList;
  value: string;
  genre: string;
}
/* @figmaId 602:90 */
export const Group2_Property1InputForm: FC<Props> = memo(
  function Group2_Property1InputForm(props) {
    const [name, setName] = useState<string>(props.value);
    const FB = new firebase("posts");
    useEffect(() => {
      setName(props.value);
    }, [props.value]);
    return (
      <div
        className={`${resets.clapyResets} ${props.classes?.root || ""} ${
          props.className || ""
        } ${classes.root}`}
      >
        <div className={classes.frame2}>
          {props.swap?.unnamed || <_label className={classes.unnamed} />}
          <input
            className={classes.unnamed2}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              FB.update(props.Item.documentId, {
                [props.genre]: e.target.value,
              });
            }}
            onBlur={(e) => {
              if (props.genre === "category") {
                if (
                  e.target.value !== "野菜" &&
                  e.target.value !== "タンパク質" &&
                  e.target.value !== "きのこ"
                ) {
                  alert("野菜、タンパク質、きのこのいずれかを入力してください");
                }
              }
            }}
          />
        </div>
      </div>
    );
  }
);
