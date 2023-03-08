
import { createContext } from 'react';

const ThemeContext = createContext<any>({
    theme: "",
    switchTheme: () => {},
    isDark: () => {},
    inverseTheme: () => {},
});

export default ThemeContext;