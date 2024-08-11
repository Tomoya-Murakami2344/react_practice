import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './_labelPass.module.css';
import { Ellipse279Icon } from './Ellipse279Icon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 799:307 */
export const _labelPass: FC<Props> = memo(function _labelPass(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ellipse279}>
        <Ellipse279Icon className={classes.icon} />
      </div>
      <div className={classes.pass}>Pass</div>
    </div>
  );
});
