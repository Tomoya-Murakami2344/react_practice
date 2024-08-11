import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './TopBar.module.css';

interface Props {
  className?: string;
  text: {
    unnamed: ReactNode;
  };
}
/* @figmaId 668:79 */
export const TopBar: FC<Props> = memo(function Component2_12(props) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle12}></div>
      {props.text.unnamed}
    </div>
  );
});
