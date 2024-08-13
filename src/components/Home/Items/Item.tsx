import type { FC } from "react";
import { memo, useEffect } from "react";

import { ItemList } from "../../../interface/ItemList";
import resets from "../../_resets.module.css";
import { _label2 } from "../_label2/_label2";
import { _label3 } from "../_label3/_label3";
import { DisplayVege } from "../DisplayVege/DisplayVege";
import { InputForm } from "../InputForm/InputForm";
import { TrashIcon } from "../TrashIcon/TrashIcon";
import classes from "./Item.module.css";

interface Props {
  className?: string;
  classes?: {
    rectangle8?: string;
    trashIcon?: string;
  };
  Item: ItemList;
}
/* @figmaId 679:109 */
export const Items: FC<Props> = memo(function Item_1(props) {
  useEffect(() => {}, [props.Item]);
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <DisplayVege className={classes.group2} Item={props.Item || {}} />
      <InputForm
        className={classes.group22}
        swap={{
          unnamed: <_label2 className={classes.unnamed} />,
        }}
        Item={props.Item}
        value={props.Item?.category || ""}
        genre="category"
      />
      <InputForm
        className={classes.group23}
        swap={{
          unnamed: <_label3 className={classes.unnamed} />,
        }}
        Item={props.Item}
        value={props.Item?.priority || ""}
        genre="priority"
      />
      <TrashIcon
        className={classes.group24}
        classes={{
          trashIcon: `${props.classes?.trashIcon || ""} ${classes.rectangle13}`,
        }}
        docId={props.Item?.documentId}
      />
    </div>
  );
});
