import React from 'react'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { lightTheme, darkTheme } from './Theme';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizelegibility;
		line-height: 1.3;
		background-color: ${props => props.theme.bg.primary};
	}
	h1 {
		color: ${props => props.theme.text.primary};
		font-weight: 600;
		font-size: 48px;
		letter-spacing: -4px;
		line-height: 1;
		text-align: center;
	}
	@media (min-width: 768px) { 
		h1 {
			text-align: left;
			font-size: 72px;
		}
	}
	p {
		color: #8F9292;
		font-size: 24px;
		font-weight: 400;
		line-height: 1.4;
		margin-bottom: 40px;
		text-align: center;
	}
	@media (min-width: 768px) { 
		p {
			text-align: left;
			font-size: 26px;
		}
	}
	*:focus {
		outline:none
	}
`


export default ({ children }) => {
  const { value } = useDarkMode(false, { storageKey: null, onChange: null })
  const theme = value ? darkTheme : lightTheme

  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // prevents ssr flash for mismatched dark mode
  if (!mounted) return null

  return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
      {children}
    </ThemeProvider>
  );
}