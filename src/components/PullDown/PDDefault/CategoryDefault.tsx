import type { FC } from "react";
import { memo } from "react";

import resets from "../../_resets.module.css";
import { Polygon_Property1Down } from "../Polygon_Property1Down/Polygon_Property1Down";
import classes from "./PDDefault.module.css";
import { Polygon1Icon } from "./Polygon1Icon";

interface Props {
  className?: string;
  text: string;
  onClick?: () => void;
}
/* @figmaId 603:55 */
export const CategoryDefault: FC<Props> = memo(
  function CategoryDefault({ onClick, text }) {
    return (
      // <div className="component-container">
      <div
        className={`${resets.clapyResets} ${classes.root}`}
        onClick={onClick}
      >
        <div className={classes.unnamed}>{text}</div>
        <Polygon_Property1Down
          className={classes.polygon}
          swap={{
            polygon1: <Polygon1Icon className={classes.icon} />,
          }}
        />
      </div>
    );
  }
);
