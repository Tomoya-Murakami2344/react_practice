import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _label } from '../_label/_label';
import classes from './Group2_Property1InputForm.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    unnamed?: ReactNode;
  };
}
/* @figmaId 602:90 */
export const Group2_Property1InputForm: FC<Props> = memo(function Group2_Property1InputForm(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame2}>
        {props.swap?.unnamed || <_label className={classes.unnamed} />}
        {/* <div className={classes.unnamed2}>アイテム</div> */}
        <input type="text" className={classes.unnamed2} placeholder="優先度" />
      </div>
    </div>
  );
});
