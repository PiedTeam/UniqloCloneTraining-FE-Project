import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import GlobalCssPriority from './config/GlobalCssPriority'
import { ThemeProvider, createTheme } from '@mui/material'

const rootElement = document.getElementById('root')

const theme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement
      }
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement
      }
    },
    MuiDialog: {
      defaultProps: {
        container: rootElement
      }
    },
    MuiModal: {
      defaultProps: {
        container: rootElement
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalCssPriority injectFirst>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </GlobalCssPriority>
    </BrowserRouter>
  </React.StrictMode>
)
