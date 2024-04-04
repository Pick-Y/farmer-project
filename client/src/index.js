import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './theme'

import UserProvider from './context/UserContext'
import FarmerProvider from './context/FarmerContext'
import AppRoutes from './routes'

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserProvider>
        <FarmerProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </FarmerProvider>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
)
