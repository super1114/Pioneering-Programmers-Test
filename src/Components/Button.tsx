
import * as css from "./Button.css";
import * as theme from "../theme.css";
import { useContext } from "react";
import ThemeContext from "../contexts/themeContext";

function Button(props: any) {
  const themeCtx = useContext(ThemeContext);
  const scheme = themeCtx.isDark() ? theme.dark : theme.light;

  const handleClick = (e: any) => {
    if (props.disabled !== true)
      props.onClick(e);
  }

  return (
    <div className={`${scheme} ${css.index} ${props.disabled ? css.disabled : ""} ${props.customStyle}`} {...props} onClick={handleClick}>
      {props.children}
    </div>
  );
}

export default Button;
