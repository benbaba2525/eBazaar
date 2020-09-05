import React from 'react'
import MainRouter from './mainRouter'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { blueGrey, lightGreen } from 'material-ui/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8eacbb',
      main: '#00acff',
      dark: '#34515e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e7ff8c',
      main: '#b2ff59',
      dark: '#7ecb20',
      contrastText: '#000',
    },
    openTitle: blueGrey['400'],
    protectedTitle: lightGreen['400'],
    type: 'light'
  }
})

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MainRouter />
    </MuiThemeProvider>
  </BrowserRouter>
)

export default App;