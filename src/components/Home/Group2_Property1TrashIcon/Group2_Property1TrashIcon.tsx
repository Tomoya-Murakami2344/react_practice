import type { FC } from "react";
import { memo } from "react";

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import resets from "../../_resets.module.css";
import { _labelTrash } from "../_labelTrash/_labelTrash";
import classes from "./Group2_Property1TrashIcon.module.css";

interface Props {
  className?: string;
  classes?: {
    trashIcon?: string;
    root?: string;
  };
  docId: string;
}
const deleteDocument = async (collectionName: string, documentId: string) => {
  try {
    // コレクション名とドキュメントIDを使用してドキュメントの参照を取得
    const docRef = doc(db, collectionName, documentId);

    // ドキュメントを削除
    await deleteDoc(docRef);
    console.log("Document successfully deleted!");
  } catch (error) {
    console.error("Error removing document: ", error);
  }
};
/* @figmaId 679:810 */
export const Group2_Property1TrashIcon: FC<Props> = memo(
  function Group2_Property1TrashIcon(props) {
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
          <button
            className={classes.unnamed2}
            onClick={() => {
              deleteDocument("posts", props.docId);
            }}
          >
            削除
          </button>
        </div>
      </div>
    );
  }
);
