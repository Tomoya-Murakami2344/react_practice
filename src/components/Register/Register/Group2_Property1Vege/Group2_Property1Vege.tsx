import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Group2_Property1Vege.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle8?: string;
    root?: string;
  };
}
/* @figmaId 601:23 */
export const Group2_Property1Vege: FC<Props> = memo(function Group2_Property1Vege(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame2}>
        <div className={`${props.classes?.rectangle8 || ''} ${classes.rectangle8}`}></div>
        {/* <div className={classes.unnamed}>アイテム</div> */}
        <input type="text" className={classes.unnamed} placeholder="名称" />
      </div>
    </div>
  );
});
