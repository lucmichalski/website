import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from './useDarkMode';
import { GlobalStyle, lightTheme, darkTheme } from './Theme';
import Toggle from './Toggle';

export default ({ children }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) return null

  return (
		<ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      {children}
    </ThemeProvider>
  );
}