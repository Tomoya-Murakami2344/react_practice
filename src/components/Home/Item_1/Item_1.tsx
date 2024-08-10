import type { FC } from "react";
import { memo } from "react";

import { ItemList } from "../../../interface/ItemList";
import resets from "../../_resets.module.css";
import { _label2 } from "../_label2/_label2";
import { _label3 } from "../_label3/_label3";
import { Group2_Property1InputForm } from "../Group2_Property1InputForm/Group2_Property1InputForm";
import { Group2_Property1TrashIcon } from "../Group2_Property1TrashIcon/Group2_Property1TrashIcon";
import { Group2_Property1Vege } from "../Group2_Property1Vege/Group2_Property1Vege";
import classes from "./Item_1.module.css";

interface Props {
  className?: string;
  classes?: {
    rectangle8?: string;
    trashIcon?: string;
  };
  Item: ItemList;
}
/* @figmaId 679:109 */
export const Item_1: FC<Props> = memo(function Item_1(props) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Group2_Property1Vege
        className={classes.group2}
        classes={{
          rectangle8: `${props.classes?.rectangle8 || ""} ${
            classes.rectangle8
          }`,
        }}
        Item={props.Item || {}}
      />
      <Group2_Property1InputForm
        className={classes.group22}
        swap={{
          unnamed: <_label2 className={classes.unnamed} />,
        }}
        category={props.Item?.category}
      />
      <Group2_Property1InputForm
        className={classes.group23}
        swap={{
          unnamed: <_label3 className={classes.unnamed} />,
        }}
        category={props.Item?.priority}
      />
      <Group2_Property1TrashIcon
        className={classes.group24}
        classes={{
          trashIcon: `${props.classes?.trashIcon || ""} ${classes.rectangle13}`,
        }}
        docId={props.Item?.documentId}
      />
    </div>
  );
});
