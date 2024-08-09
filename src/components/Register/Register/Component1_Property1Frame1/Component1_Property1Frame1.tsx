import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Polygon_Property1Down } from '../Polygon_Property1Down/Polygon_Property1Down';
import classes from './Component1_Property1Frame1.module.css';
import { Polygon1Icon } from './Polygon1Icon';
import { PullDownComponent } from '../../../PullDown/PullDownComponent';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 603:55 */
export const Component1_Property1Frame1: FC<Props> = memo(function Component1_Property1Frame1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {/* <div className={classes.unnamed}>カテゴリ</div>
      <Polygon_Property1Down
        className={classes.polygon}
        swap={{
          polygon1: <Polygon1Icon className={classes.icon} />,
        }}
      /> */}
      <PullDownComponent className={classes.PullDown} />
    </div>
  );
});
