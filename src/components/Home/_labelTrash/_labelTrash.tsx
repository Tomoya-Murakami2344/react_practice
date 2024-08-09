import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './_labelTrash.module.css';
import { Ellipse279Icon } from './Ellipse279Icon';

interface Props {
  className?: string;
  classes?: {
    trashIcon?: string;
    root?: string;
  };
}
/* @figmaId 679:806 */
export const _labelTrash: FC<Props> = memo(function _labelTrash(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ellipse279}>
        <Ellipse279Icon className={classes.icon} />
      </div>
      <div className={`${props.classes?.trashIcon || ''} ${classes.rectangle13}`}></div>
    </div>
  );
});
