
import * as css from "./Header.css";
import * as theme from "../theme.css";
import { useContext } from "react";
import ThemeContext from "../contexts/themeContext";

function Header() {
  const themeCtx = useContext(ThemeContext);
  const scheme = themeCtx.isDark() ? theme.dark : theme.light;
  return (
    <div className={`${scheme} ${css.index}`}>
      Pioneering Programmers Test App
    </div>
  );
}

export default Header;
  