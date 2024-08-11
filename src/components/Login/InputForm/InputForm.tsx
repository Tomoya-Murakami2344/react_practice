import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _label } from '../_label/_label';
import classes from './InputForm.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    unnamed?: ReactNode;
  };
  placeholder?: string;
  setValue: (value: string) => void;
}
/* @figmaId 602:90 */
export const InputForm: FC<Props> = memo(function Group2_Property1InputForm(props) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame2}>
        {props.swap?.unnamed || <_label className={classes.unnamed} />}
        <input className={classes.unnamed2} placeholder={props.placeholder} onChange={
          (e) => {
            props.setValue(e.target.value);
          }
        }></input>
      </div>
    </div>
  );
});
