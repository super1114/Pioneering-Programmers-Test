
import { useState } from 'react';
import ThemeContext from '../contexts/themeContext';

//const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

export default function ThemeProvider(props: any) {
    //const [theme, setTheme] = useState(getCurrentTheme() ? 'dark' : 'light');
    const [theme, setTheme] = useState('Light');

    const switchTheme = () => {
        if (isDark())
            setTheme('Light');
        else
            setTheme('Dark');
    }
  
    const isDark = () => {
      return theme === 'Dark';
    }

    const inverseTheme = () => {
        if (isDark())
            return 'Light';
        else return 'Dark';
    }

    let context = {
      theme: theme,
      switchTheme: switchTheme,
      isDark: isDark,
      inverseTheme: inverseTheme,
    };

    return (
      <ThemeContext.Provider value={context}>
        {props.children}
      </ThemeContext.Provider>
    );
}