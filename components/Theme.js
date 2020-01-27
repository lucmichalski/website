import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  bg: {
    primary: '#FFF',
    matt: '#FAFAFA',
    secondaryLightOnly: '#14143C',
    selected: '#fffce6',
    shade: '#e8e8e8',
    shadowLightOnly: 'rgba(0,0,0,.09) 0 10px 20px 0',
    greyDark: '#CCC',
    border: '#EAEAEA',
    borderDarkOnly: 'none'
  },
  text: {
    primary: '#1A3066',
    secondary: '#2f3037',
    tertiary: '#525560',
    quarternary: '#9194a1',
    grey: '#546581',
    placeholder: 'rgba(82,85,96,0.5)',
    onPrimary: '#ffffff'
  },
  // ...
}

export const darkTheme = {
  bg: {
    primary: '#050505',
    matt: '#121212',
    secondaryLightOnly: '#050505',
    selected: '#FFBB00',
    shade: '#393939',
    shadowLightOnly: 'none',
    greyDark: 'rgb(68,68,68,.8)',
    border: '#333',
    borderDarkOnly: "#333333"
  },
  text: {
    primary: '#FBFBFC',
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
    font-family: Colfax;
    src: url(/fonts/Colfax-Bold.woff);
  }
  body {
    font-family: Colfax;
		-webkit-font-smoothing: antialiased;
		line-height: 1.3;
		background-color: ${props => props.theme.bg.primary};
  }
	h1 {
    @media only screen and (min-width: 768px) { 
      font-size: 54px;
    }
		color: ${props => props.theme.text.primary};
		font-weight: 600;
    font-size: 42px;
		line-height: 1.4;
    text-align: center;
    margin-bottom: 2rem;
  }
  h2 {
    media only screen and (min-width: 768px) {
      font-size: 42px;
    }
    margin-bottom: 20px;
    font-weight: 600;
    line-height: 1.4;
    font-size: 36px;
    color: ${props => props.theme.text.primary};
  }
	
	p {
    font-family: Roboto Mono;
		color: ${props => props.theme.text.grey};
		font-size: 18px;
		font-weight: 400;
		line-height: 1.4;
    margin-bottom: 1rem;
	}
	
	*:focus {
		outline:none
  }
  
`