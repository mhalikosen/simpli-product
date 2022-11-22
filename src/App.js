// Apollo for GraphQL
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

// Contexts
import AuthContextProvider from './contexts/AuthContext'

// Import Navigation
import Navigation from './Navigation'

export default () => {
  // Initialize Apollo Client
  const client = new ApolloClient({
    uri: 'https://simplisaleshw.cotunnel.com/graphql',
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </ApolloProvider>
  )
}
