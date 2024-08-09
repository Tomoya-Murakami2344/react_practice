import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _label3 } from './_label3/_label3';
import { Component2_1 } from './Component2_1/Component2_1';
import { Component2_12 } from './Component2_12/Component2_12';
import { Group2_Property1Category } from './Group2_Property1Category/Group2_Property1Category';
import { Item_1Register } from './Item_1Register/Item_1Register';
import classes from './Register.module.css';

interface Props {
  className?: string;
}
/* @figmaId 679:1003 */
export const Register: FC<Props> = memo(function Register(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.registerForm}>
        <Item_1Register
          classes={{ rectangle8: classes.rectangle8 }}
          swap={{
            group2: (
              <Group2_Property1Category className={classes.group2} classes={{ rectangle8: classes.rectangle82 }} />
            ),
            unnamed: <_label3 className={classes.unnamed} />,
          }}
        />
        <Component2_1 classes={{ rectangle12: classes.rectangle12 }} />
      </div>
      <div className={classes.topBar}>
        <Component2_12
          text={{
            unnamed: <div className={classes.unnamed2}>登録画面</div>,
          }}
        />
      </div>
    </div>
  );
});
