import { memo } from 'react';
import type { FC } from 'react';

import { ItemList } from "../../interface/ItemList";
import resets from '../_resets.module.css';
import { Component2_1 } from './Component2_1/Component2_1';
import { Component2_12 } from './Component2_12/Component2_12';
import { Item_1 } from './Item_1/Item_1';
import classes from './MacBookAir1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 668:62 */
export const HomeComponent: FC<Props> = memo(function MacBookAir1(props = {}) {
  const items: ItemList[] = [
    { name: 'ゴーヤ', category: '野菜', priority: '低' },
    { name: 'もやし', category: '野菜', priority: '低' },
    { name: 'ほうれん草', category: '野菜', priority: '低' },
    { name: 'いわし', category: 'タンパク質', priority: '低' },
    { name: '舞茸', category: 'きのこ', priority: '高' },
    { name: '舞茸', category: 'きのこ', priority: '高' },
    { name: '舞茸', category: 'きのこ', priority: '高' },
  ];
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle11}></div>
      <div className={classes.frame8}>
        {items.map((item, index) => (
          <Item_1 key={index} classes={{ rectangle8: classes.rectangle8, trashIcon: classes.rectangle13 }} Item={item} />
        ))}
      </div>
      <Component2_1 className={classes.component3} />
      <Component2_12 className={classes.component2} classes={{ rectangle12: classes.rectangle12 }} />
    </div>
  );
});
