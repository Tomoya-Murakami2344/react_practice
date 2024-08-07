import type { FC } from "react";
import { memo } from "react";

import { useState } from "react";
import resets from "../_resets.module.css";
import classes from "./Component1.module.css";
import classes2 from "./Component1_Property1Frame1/Component1_Property1Frame1.module.css";

import { Component1_Property1Frame1 } from "./Component1_Property1Frame1/Component1_Property1Frame1";
import { Component1_Property1Frame2 } from "./Component1_Property1Frame2/Component1_Property1Frame2";

interface Props {
  className?: string;
}
interface Option {
  value: string;
  label: string;
}
const options: Option[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
/* @figmaId 603:56 */
export const Component1: FC<Props> = memo(function Component1(props = {}) {
  const [chosen, setChosen] = useState(false);
  const [chosenOption, setChosenOption] = useState<string | null>(null);
  const [showSecondComponent, setShowSecondComponent] = useState(false);

  const handleComponentClick = () => {
    if(chosenOption) setChosenOption(null);
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
            <Component1_Property1Frame1 onClick={handleComponentClick} text={chosenOption} />
          ) : showSecondComponent ? (
            <Component1_Property1Frame1 onClick={handleComponentClick} text="カテゴリ"/>
          ) : (
            <Component1_Property1Frame2
              onClick={handleComponentClick}
              chooseOption={setChosenOptionString}
            />
          )}
        </header>
      </div>
      {/* <Component1_Property1Frame2 /> */}
      {/* <Component1_Property1Frame1 />
      <Component1_Property1Frame2 /> */}
    </div>
  );
});
