import React from 'react'
import ReactDOM from 'react-dom/client'

import { ApolloProvider } from '@apollo/client'

import App from './components/app/routes'
import ReduxProvider from './redux/provider/ReduxProvider'

import './index.css'
import { client } from './shared/common/api'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </ApolloProvider>
  </React.StrictMode>
)
