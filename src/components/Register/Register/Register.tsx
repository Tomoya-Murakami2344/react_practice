import type { FC } from "react";
import { memo, useState } from "react";

import resets from "../_resets.module.css";
import { _label3 } from "./_label3/_label3";
import { Component2_12 } from "./Component2_12/Component2_12";
import { Group2_Property1Category } from "./Group2_Property1Category/Group2_Property1Category";
import { AddButton } from "./ItemAddButton/ItemAddButton";
import { Item_1Register } from "./ItemRegisterFields/ItemRegisterFields";
import classes from "./Register.module.css";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase";

interface Props {
  className?: string;
}
const getStrTime = (time: number) => {
  let t = new Date(time);
  return `${t.getFullYear()}/${
    t.getMonth() + 1
  }/${t.getDate()} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;
};
/* @figmaId 679:1003 */
export const Register: FC<Props> = memo(function Register(props = {}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");

  const onSubmit = async () => {
    console.log(name, category, priority);
    try {
      await addDoc(collection(db, "posts"), {
        name: name,
        category: category,
        priority: priority,
        created_at: getStrTime(new Date().getTime()),
      });
      setName("");
      setCategory("");
      setPriority("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.registerForm}>
        <Item_1Register
          classes={{ rectangle8: classes.rectangle8 }}
          swap={{
            group2: (
              <Group2_Property1Category
                className={classes.group2}
                classes={{ rectangle8: classes.rectangle82 }}
                setCategory={setCategory}
              />
            ),
            unnamed: <_label3 className={classes.unnamed} />,
          }}
          setValue={{
            setNames: setName,
            setCategory: setCategory,
            setPriority: setPriority,
          }}
        />
        <AddButton
          classes={{ rectangle12: classes.rectangle12 }}
          onClick={onSubmit}
        />
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
