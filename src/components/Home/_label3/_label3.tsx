import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './_label3.module.css';
import { Ellipse279Icon } from './Ellipse279Icon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 601:99 */
export const _label3: FC<Props> = memo(function _label3(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ellipse279}>
        <Ellipse279Icon className={classes.icon} />
      </div>
      <div className={classes.unnamed}>優先度</div>
    </div>
  );
});
