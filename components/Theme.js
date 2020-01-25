import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  bg: {
    primary: '#FFF',
    matt: '#FAFAFA',
    selected: '#fffce6',
    shade: '#e8e8e8',
    shadowLightOnly: 'rgba(0,0,0,.09) 0 10px 20px 0',
    border: '#EAEAEA',
    borderDarkOnly: 'none'
  },
  text: {
    primary: '#050505',
    secondary: '#2f3037',
    tertiary: '#525560',
    quarternary: '#9194a1',
    grey: '#333333',
    placeholder: 'rgba(82,85,96,0.5)',
    onPrimary: '#ffffff'
  },
  // ...
}

export const darkTheme = {
  bg: {
    primary: '#050505',
    matt: '#121212',
    selected: '#FFBB00',
    shade: '#393939',
    shadowLightOnly: 'none',
    border: '#333333',
    borderDarkOnly: "#333333"
  },
  text: {
    primary: '#fbfbfc',
    secondary: '#e3e4e8',
    tertiary: '#a9abb6',
    quarternary: '#6c6f7e',
    grey: '#7E7E7E',
    placeholder: 'rgba(145,148,161,0.5)',
    onPrimary: '#050505'
  },
  // ...
}

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
  @font-face {
    font-family: Galano-Grotesque;
    src: url(/fonts/Galano-Grotesque-Bold.otf);
  }
  body {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizelegibility;
		line-height: 1.3;
		background-color: ${props => props.theme.bg.primary};
  }
	h1 {
    @media only screen and (min-width: 768px) { 
      font-size: 72px;
    }
    font-family: Galano-Grotesque;
		color: ${props => props.theme.text.primary};
		font-weight: 600;
		font-size: 48px;
		letter-spacing: -4px;
		line-height: 1;
		text-align: center;
  }
  h2 {
    @media only screen and (min-width: 1024px) {
      font-weight: 600;
      line-height: 1.1;
      font-size: 58px;
      letter-spacing: -3px;
    }
    media only screen and (min-width: 768px) {
      font-weight: 600;
      line-height: 1.1;
      font-size: 48px;
      letter-spacing: -2px;
    }
    font-family: Archivo Black, sans-serif;
    margin-top: 0px;
    margin-bottom: 20px;
    font-weight: 600;
    line-height: 1.1;
    font-size: 36px;
    letter-spacing: -1.5px;
    color: ${props => props.theme.text.primary};
  }
	
	p {
    font-family: Colfax, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-weight: 400;
    margin-top: 0px;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 1.7;
	}
	
	*:focus {
		outline:none
  }
  
`