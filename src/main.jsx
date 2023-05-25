// import 'dotenv/config'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { purple } from '@mui/material/colors'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

const theme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: 'gray',
            },
            '&:hover fieldset': {
              borderColor: 'gray',
              borderWidth: '1px',
            },
            '& fieldset': {
              borderColor: 'gray',
            },
          },
        },
      },
    },
  },
  palette: {
    // primary: {
    //   main: '#fefefe',
    // },
    secondary: purple,
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
})

root.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </StyledEngineProvider>
)
