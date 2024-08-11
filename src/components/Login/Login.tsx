import type { FC } from "react";
import { memo } from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../../auth/authenticate";
import resets from "../_resets.module.css";
import classes from "./Login.module.css";
import { LoginButton } from "./LoginButton/LoginButton";
import { LoginInputFields } from "./LoginInputFields/LoginInputFields";
import { TopBar } from "./TopBar/TopBar";

interface Props {
  className?: string;
  hide?: {
    group2?: boolean;
  };
}
/* @figmaId 799:277 */
export const Login: FC<Props> = memo(function Register(props = {}) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.loginForm}>
        <LoginInputFields
          className={classes.item}
          setUserName={setUserName}
          setPassword={setPassword}
        />
        <LoginButton
          classes={{ rectangle12: classes.loginButton }}
          text={{
            unnamed: <div className={classes.unnamed3}>ログイン</div>,
          }}
          onClick={async () => {
            const bool = await authenticate(userName, password);
            if (bool) navigate("/Home");
            else alert("ログインに失敗しました");
          }}
        />
      </div>
      <div className={classes.topBar}>
        <TopBar
          text={{
            unnamed: <div className={classes.topBarText}>ログイン画面</div>,
          }}
        />
      </div>
    </div>
  );
});
