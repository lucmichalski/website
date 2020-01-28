import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  bg: {
    primary: '#FFF',
    matt: '#FAFAFA',
    secondaryLightOnly: '#14143C',
    selected: '#fffce6',
    shade: '#e8e8e8',
    shadowLightOnly: '0 5px 10px rgba(0,0,0,.12)',
    greyDark: '#CCC',
    border: '#EAEAEA',
    borderDarkOnly: 'none'
  },
  text: {
    primary: '#121212',
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
    font-family: Geomanist;
    src: url(/fonts/Geomanist-Bold.woff);
  }
  body {
    font-family: Roboto Mono;
		-webkit-font-smoothing: antialiased;
		line-height: 1.3;
		background-color: ${props => props.theme.bg.primary};
  }
	h1 {
    @media only screen and (min-width: 768px) { 
      font-size: 4rem;
    }
    color: ${props => props.theme.text.primary};
    font-family: Geomanist, -apple-system, system-ui, BlinkMacSystemFont, Helvetica Neue, sans-serif;
    font-size: 2.5rem;
    line-height: 1.1em;
    font-weight: 800;
    letter-spacing: -.05rem;
    margin: 50px 0;
  }
  h2 {
    @media only screen and (min-width: 768px) {
      font-size: 3.5rem;
    }
    color: ${props => props.theme.text.primary};
    font-family: Geomanist, -apple-system, system-ui, BlinkMacSystemFont, Helvetica Neue, sans-serif;
    font-size: 2rem;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: -.05rem;
    margin: 50px 0;
  }

  h3, h4, h5, h6 {
    font-family: Geomanist, -apple-system, system-ui, BlinkMacSystemFont, Helvetica Neue, sans-serif;
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

  .ant-btn-lg {
    padding: 0 25px;
  }
  
`