import { collection, onSnapshot } from "firebase/firestore";
import type { FC } from "react";
import { memo, useEffect, useState } from "react";

import { DocumentData } from "@firebase/firestore-types";
import { db } from "../../db/initialize";
import { ItemList } from "../../interface/ItemList";
import resets from "../_resets.module.css";
import classes from "./HomeComponent.module.css";
import { Items } from "./Items/Item";
import { RoutingButton } from "./RoutingButton/RoutingButton";
import { TopBar } from "./TopBar/TopBar";

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
      <div className={classes.rectangle11}>
        <TopBar className={classes.Ichiran} />
        <RoutingButton
          className={classes.componentAdd}
          classes={{ rectangle12: classes.rectangle12 }}
          navigateTo="/Register"
          text="追加画面へ"
        />
        <RoutingButton
          className={classes.componentLogOut}
          classes={{ rectangle12: classes.rectangle12 }}
          navigateTo="/"
          text="ログアウト"
        />
      </div>
      <div className={classes.frame8}>
        {posts.map((post, index) => {
          try {
            return (
              <Items
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
    </div>
  );
});
