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
      light: '#4f83cc',
      main: '#01579b',
      dark: '#002f6c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
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