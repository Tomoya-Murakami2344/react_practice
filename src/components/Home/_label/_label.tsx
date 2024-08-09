import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './_label.module.css';
import { Ellipse279Icon } from './Ellipse279Icon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 601:91 */
export const _label: FC<Props> = memo(function _label(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ellipse279}>
        <Ellipse279Icon className={classes.icon} />
      </div>
      <div className={classes.unnamed}>名称</div>
    </div>
  );
});
