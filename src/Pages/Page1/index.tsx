
import { useContext, useState } from "react";
import * as css from "./index.css";
import * as themeCss from "../../theme.css";

import Button from "../../Components/Button";
import ThemeContext from "../../contexts/themeContext";

function Page1() {
  const themeCtx = useContext(ThemeContext);
  const scheme = themeCtx.isDark() ? themeCss.dark : themeCss.light;

  const [action, setAction] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [buttons, setButtons] = useState<string[]>([]);

  const padTo2Digits = (num: number) => {
    return num.toString().padStart(2, '0');
  }

  const currentDate = () => {
    const date = new Date();
    
    return (
      [
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
        date.getFullYear() % 100,
      ].join('/') +
      ' ' +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(':')
    );
  }

  const pushAction = (str: string) => {
    setAction(current => [`${currentDate()} ${str}`, ...current])
  }

  const handleSwitchTheme = () => {
    themeCtx.switchTheme();
    pushAction(`Theme was set to ${themeCtx.inverseTheme()}`);
  }

  const handleSendMessage = () => {
    pushAction(`Message Sent: ${message}`);
    setMessage("");
  }

  const handleAddButton = () => {
    pushAction(`Button ${buttons.length + 1} added`);
    setButtons(current => [...current, ""])
  }

  const handleClickButton = (num: number) => {
    pushAction(`Button ${num} clicked`);
  }

  return (
    <div className={css.index}>
      <div className={`${scheme} ${css.left}`}>
        <Button onClick={handleSwitchTheme}>
          Set {themeCtx.inverseTheme()} Theme
        </Button>
        <textarea className={css.textArea} rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
        <Button disabled={message === ""} onClick={handleSendMessage}>
          Send
        </Button>
        <div className={css.buttonGroup}>
          <Button onClick={handleAddButton}>
            Add Button {buttons.length + 1}
          </Button>
          {
            buttons.map((item, i) => {
              return <Button onClick={() => handleClickButton(i + 1)}>
                Button {i + 1}
              </Button>
            })
          }
        </div>
      </div>
      <div className={`${scheme} ${css.right}`}>
      {
        action.map((item, i) => {
          return <div key={i} className={css.history}>{item}</div>
        })
      }
      </div>
    </div>
    
  );
}

export default Page1;
