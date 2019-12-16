import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  bg: {
    primary: '#eff0f5',
    secondary: '#ffffff',
    inset: '#e2e4e8',
    input: 'rgba(65,67,78,0.12)'
  },
  text: {
    primary: '#050505',
    secondary: '#2f3037',
    tertiary: '#525560',
    quarternary: '#9194a1',
    placeholder: 'rgba(82,85,96,0.5)',
    onPrimary: '#ffffff'
  },
  // ...
}

export const darkTheme = {
  bg: {
    primary: '#050505',
    secondary: '#111111',
    inset: '#111111',
    input: 'rgba(191,193,201,0.12)'
  },
  text: {
    primary: '#fbfbfc',
    secondary: '#e3e4e8',
    tertiary: '#a9abb6',
    quarternary: '#6c6f7e',
    placeholder: 'rgba(145,148,161,0.5)',
    onPrimary: '#050505'
  },
  // ...
}

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
  body {
    font-family: 'Roboto Mono';
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizelegibility;
		line-height: 1.3;
		background-color: ${props => props.theme.bg.primary};
	}
	h1 {
    font-family: 'Archivo Black', sans-serif;
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
		color: #333;
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