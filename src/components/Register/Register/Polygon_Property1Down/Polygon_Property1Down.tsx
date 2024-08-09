import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Polygon1Icon } from './Polygon1Icon';
import classes from './Polygon_Property1Down.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    polygon1?: ReactNode;
  };
}
/* @figmaId 602:132 */
export const Polygon_Property1Down: FC<Props> = memo(function Polygon_Property1Down(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.polygon1}>{props.swap?.polygon1 || <Polygon1Icon className={classes.icon} />}</div>
    </div>
  );
});
