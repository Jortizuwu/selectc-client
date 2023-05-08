import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { setContext } from '@apollo/client/link/context'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_BASE_URL,
})

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'https://select-c.azurewebsites.net/',
  })
)

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(splitLink),
  cache: new InMemoryCache(),
})
