import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import GlobalCssPriority from './configs/GlobalCssPriority'
import { ThemeProvider, createTheme } from '@mui/material'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalCssPriority injectFirst>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ThemeProvider>
      </GlobalCssPriority>
    </BrowserRouter>
  </React.StrictMode>
)
