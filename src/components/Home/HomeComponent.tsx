import { collection, onSnapshot } from "firebase/firestore";
import type { FC } from "react";
import { memo, useEffect, useState } from "react";

import { DocumentData } from "@firebase/firestore-types";
import { db } from "../../firebase";
import { ItemList } from "../../interface/ItemList";
import resets from "../_resets.module.css";
import { Component2_1 } from "./Component2_1/Component2_1";
import { Component2_12 } from "./Component2_12/Component2_12";
import classes from "./HomeComponent.module.css";
import { Item_1 } from "./Item_1/Item_1";

interface Props {
  className?: string;
}
/* @figmaId 668:62 */
export const HomeComponent: FC<Props> = memo(function MacBookAir1(props = {}) {
  const [posts, setPosts] = useState<DocumentData[]>([]);

  useEffect(() => {
    onSnapshot(collection(db, "posts"), (posts) => {
      setPosts(
        posts.docs
          // documentIdを追加
          .map((post) => {
            return {
              documentId: post.id,
              ...post.data(),
              created_at: post.data().created_at,
            };
          })
          .sort((a, b) => b.created_at - a.created_at)
      );
    });
  }, []);
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle11}></div>
      <div className={classes.frame8}>
        {posts.map((post, index) => {
          try {
            return (
              <Item_1
                key={index}
                classes={{
                  rectangle8: classes.rectangle8,
                  trashIcon: classes.rectangle13,
                }}
                Item={post as ItemList}
              />
            );
          } catch (error) {
            console.log(error);
          }
        })}
      </div>
      <Component2_1 className={classes.component3} />
      <Component2_12
        className={classes.component2}
        classes={{ rectangle12: classes.rectangle12 }}
      />
    </div>
  );
});
