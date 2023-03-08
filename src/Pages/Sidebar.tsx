
import { useContext } from "react";
import { useCollapse } from "../hooks/use-collapse";

import { Tooltip as ReactTooltip } from "react-tooltip";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'

import * as css from "./Sidebar.css";
import * as themeCss from "../theme.css";
import 'react-tooltip/dist/react-tooltip.css'

import ThemeContext from "../contexts/themeContext";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const themeCtx = useContext(ThemeContext);
  const scheme = themeCtx.isDark() ? themeCss.dark : themeCss.light;
  const { isCollapsed, switchCollapse } = useCollapse();

  //const navigate = (url: string) => {
    //window.location.href = url;
  //}

  return (
    <div className={`${scheme} ${css.index} ${isCollapsed() ? css.collapsed_y : css.collapsed_n}`}>
      <div className={css.collapseButton}>
        <FontAwesomeIcon className={`${css.cursorPointer} ${css.icon}`} icon={faBars} onClick={switchCollapse} />
      </div>
      <div
        onClick={() => navigate('/page1')}
        data-tooltip-id="page1-nav"
        data-tooltip-content="Page1"
        className={`${css.navButton} ${css.cursorPointer}`}>
        <FontAwesomeIcon icon={faHouse} className={css.icon} />
        {isCollapsed() && <div className={css.navText}>Page1</div>}
      </div>
      <div
        onClick={() => navigate('/page2')}
        data-tooltip-id="page2-nav"
        data-tooltip-content="Page2"
        className={`${css.navButton} ${css.cursorPointer}`}>
        <FontAwesomeIcon icon={faUser} className={css.icon} />
        {isCollapsed() && <div className={css.navText}>Page2</div>}
      </div>
      {!isCollapsed() && <>
        <ReactTooltip
          id="page1-nav"
          place="bottom"
        />
        <ReactTooltip
          id="page2-nav"
          place="bottom"
        />
      </>}
    </div>
  );
}

export default Sidebar;
  