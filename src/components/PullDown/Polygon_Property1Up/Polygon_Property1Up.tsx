import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Polygon1Icon } from './Polygon1Icon';
import classes from './Polygon_Property1Up.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    polygon1?: ReactNode;
  };
  onClick?: () => void;
}
/* @figmaId 602:134 */
export const Polygon_Property1Up: FC<Props> = memo(function Polygon_Property1Up(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`} onClick={props.onClick}>
      <div className={classes.polygon1}>{props.swap?.polygon1 || <Polygon1Icon className={classes.icon} />}</div>
    </div>
  );
});
