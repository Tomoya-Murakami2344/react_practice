import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './TopBar.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 668:79 */
export const TopBar: FC<Props> = memo(function Component2_1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle12}></div>
      <div className={classes.unnamed}>アイテム一覧</div>
    </div>
  );
});
