import type { FC, ReactNode } from "react";
import { memo } from "react";

import resets from "../../_resets.module.css";
import { _label2 } from "../_label2/_label2";
import { InputForm } from "../InputForm/InputForm";
import classes from "./LoginInputFields.module.css";

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    group2?: ReactNode;
    unnamed?: ReactNode;
  };
  setUserName: (value: string) => void;
  setPassword: (value: string) => void;
}
/* @figmaId 679:521 */
export const LoginInputFields: FC<Props> = memo(function Item_1Register(props) {
  return (
    <div
      className={`${resets.clapyResets} ${props.classes?.root || ""} ${
        props.className || ""
      } ${classes.root}`}
    >
      <InputForm
        className={classes.group22}
        swap={{
          unnamed: props.swap?.unnamed || (
            <_label2 className={classes.unnamed} />
          ),
        }}
        placeholder="ユーザー名"
        setValue={props.setUserName}
      />
      <InputForm
        className={classes.group22}
        swap={{
          unnamed: props.swap?.unnamed || (
            <_label2 className={classes.unnamed} />
          ),
        }}
        placeholder="パスワード"
        setValue={props.setPassword}
      />
    </div>
  );
});
