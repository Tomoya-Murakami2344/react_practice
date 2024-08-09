import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component2_12.module.css';

interface Props {
  className?: string;
  text?: {
    unnamed?: ReactNode;
  };
}
/* @figmaId 668:79 */
export const Component2_12: FC<Props> = memo(function Component2_12(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle12}></div>
      {props.text?.unnamed != null ? props.text?.unnamed : <div className={classes.unnamed}>アイテム一覧</div>}
    </div>
  );
});
