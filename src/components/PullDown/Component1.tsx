import type { FC } from "react";
import { memo } from "react";

import { useState } from "react";
import resets from "../_resets.module.css";
import classes from "./PullDownComponent.module.css";

import { PDDefault } from "./PDDefault/PDDefault";
import { PDOps } from "./PDOps/PDOps";

interface Props {
  className?: string;
}
/* @figmaId 603:56 */
export const Component1: FC<Props> = memo(function Component1(props = {}) {
  const [chosenOption, setChosenOption] = useState<string | null>(null);
  const [showSecondComponent, setShowSecondComponent] = useState(false);

  const handleComponentClick = () => {
    if (chosenOption) setChosenOption(null);
    else setShowSecondComponent((prev) => !prev);
  };

  const setChosenOptionString = (event: any) => {
    console.log(event.target.textContent);
    setChosenOption(event.target.textContent);
  };

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className="App">
        <header className="App-header">
          {chosenOption ? (
            <PDDefault onClick={handleComponentClick} text={chosenOption} />
          ) : showSecondComponent ? (
            <PDDefault onClick={handleComponentClick} text="カテゴリ" />
          ) : (
            <PDOps
              onClick={handleComponentClick}
              chooseOption={setChosenOptionString}
            />
          )}
        </header>
      </div>
    </div>
  );
});
