import React from 'react'
import MainRouter from './mainRouter'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import { blue, lightBlue } from 'material-ui/colors'
import CssBaseline from '@material-ui/core/CssBaseline';



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
      main: '#f50057',
      dark: '#7ecb20',
      contrastText: '#000',
    },
    openTitle: blue['400'],
    protectedTitle: lightBlue['400'],
    type: 'light',
  },
  
})

const App = () => (
  <BrowserRouter>
   <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <MainRouter />
    </MuiThemeProvider>
  </BrowserRouter>
)

export default App;