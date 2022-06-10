import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import { ChakraProvider } from './providers'

import App from './App'
import './index.css'

import './lib/i18n'

const rootElement = document.getElementById('root')!
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
