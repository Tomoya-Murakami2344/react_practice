import type { FC } from "react";
import { memo } from "react";

import resets from "../../_resets.module.css";
import { Frame5 } from "../Frame5/Frame5";
import { Polygon_Property1Up } from "../Polygon_Property1Up/Polygon_Property1Up";
import classes from "./Component1_Property1Frame2.module.css";
import { Polygon1Icon } from "./Polygon1Icon";

interface Props {
  className?: string;
  onClick?: () => void;
  chooseOption: (event: any) => void;
}
/* @figmaId 603:54 */
export const Component1_Property1Frame2: FC<Props> = memo(
  function Component1_Property1Frame2({ onClick, chooseOption }) {
    return (
      <div className={`${resets.clapyResets} ${classes.root}`}>
          <button className={classes.unnamed}>
            カテゴリ
          </button>
          <Polygon_Property1Up
            className={classes.polygon}
            swap={{
              polygon1: <Polygon1Icon className={classes.icon} />,
            }}
            onClick={onClick}
          />
        <Frame5 className={classes.frame6} chooseOption={chooseOption} />
      </div>
    );
  }
);
