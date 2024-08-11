import type { FC } from "react";
import { memo } from "react";

import { useState } from "react";
import resets from "../_resets.module.css";
import classes from "./PullDownComponent.module.css";

import { Component1_Property1Frame1 } from "./Component1_Property1Frame1/Component1_Property1Frame1";
import { Component1_Property1Frame2 } from "./Component1_Property1Frame2/Component1_Property1Frame2";

interface Props {
  className?: string;
  setCategory: (category: string) => void;
  genre?: string;
}
/* @figmaId 603:56 */
export const PullDownComponent: FC<Props> = memo(function Component1(props) {
  const [chosenOption, setChosenOption] = useState<string | null>(null);
  const [showSecondComponent, setShowSecondComponent] = useState(true);

  const handleComponentClick = () => {
    if (chosenOption) setChosenOption(null);
    else setShowSecondComponent((prev) => !prev);
  };

  const setChosenOptionString = (event: any) => {
    console.log(event.target.textContent);
    setChosenOption(event.target.textContent);
  };

  return (
    <div
      className={`${resets.clapyResets} ${classes.root} ${
        props.className || ""
      }`}
    >
      {chosenOption ? (
        <Component1_Property1Frame1
          onClick={handleComponentClick}
          text={chosenOption}
        />
      ) : showSecondComponent ? (
        <Component1_Property1Frame1
          onClick={handleComponentClick}
          text={props.genre || "カテゴリ"}
        />
      ) : (
        <Component1_Property1Frame2
          onClick={handleComponentClick}
          chooseOption={(e) => {
            setChosenOptionString(e);
            props.setCategory(e.target.textContent);
          }}
          genre={props.genre}
        />
      )}
    </div>
  );
});
