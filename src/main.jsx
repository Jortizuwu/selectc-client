import React from 'react'
import ReactDOM from 'react-dom/client'

import { ApolloProvider } from '@apollo/client'

import App from './components/app/routes'
import ReduxProvider from './redux/provider/ReduxProvider'

import './index.css'
import 'react-tabs/style/react-tabs.css'
import { client } from './shared/common/api'
import ErrorBoundary from './shared/components/BoundoryError'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <ReduxProvider>
          <App />
        </ReduxProvider>
      </ApolloProvider>
    </ErrorBoundary>
  </React.StrictMode>
)
