import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Component1_Property1Frame1 } from '../Component1_Property1Frame1/Component1_Property1Frame1';
import classes from './Group2_Property1Category.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle8?: string;
    root?: string;
  };
  setCategory: (category: string) => void;
}
/* @figmaId 697:335 */
export const Group2_Property1Category: FC<Props> = memo(function Group2_Property1Category(props) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame2}>
        <div className={`${props.classes?.rectangle8 || ''} ${classes.rectangle8}`}></div>
        <Component1_Property1Frame1 className={classes.component1} setCategory={props.setCategory} />
      </div>
    </div>
  );
});
