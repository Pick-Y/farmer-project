import { createGlobalStyle } from 'styled-components'

const theme = {
  base: {},
  colours: {
    primary: '#4851f4',
    background: '#ffffff',
    nav: '#f8f8f8',
    border: '#deebf1',
    text: '#202224',
  },
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
  }
`

export { theme, GlobalStyle }
