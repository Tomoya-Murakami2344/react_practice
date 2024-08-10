import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _label2 } from '../_label2/_label2';
import { Group2_Property1InputForm } from '../Group2_Property1InputForm/Group2_Property1InputForm';
import { Group2_Property1Vege } from '../Group2_Property1Vege/Group2_Property1Vege';
import classes from './ItemRegisterFields.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle8?: string;
  };
  swap?: {
    group2?: ReactNode;
    unnamed?: ReactNode;
  };
  setValue: {
    setNames: (value: string) => void;
    setCategory: (value: string) => void;
    setPriority: (value: string) => void;
  }
}
/* @figmaId 679:521 */
export const Item_1Register: FC<Props> = memo(function Item_1Register(props) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Group2_Property1Vege
        className={classes.group2}
        classes={{ rectangle8: `${props.classes?.rectangle8 || ''} ${classes.rectangle8}` }}
        setName={props.setValue.setNames}
      />
      {props.swap?.group2 || (
        <Group2_Property1InputForm
          className={classes.group22}
          swap={{
            unnamed: <_label2 className={classes.unnamed} />,
          }}
        />
      )}
      <Group2_Property1InputForm
        className={classes.group23}
        swap={{
          unnamed: props.swap?.unnamed || <_label2 className={classes.unnamed2} />,
        }}
      />
    </div>
  );
});
