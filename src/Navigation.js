// Apollo for GraphQL
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { useContext, useEffect } from 'react'

// React Naviation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Auth Context
import { AuthContext } from './contexts/AuthContext'

// Import pages
import Login from './pages/Login'
import Home from './pages/Home'

export default () => {
  // Check for token
  const { token, setToken } = useContext(AuthContext)

  useEffect(() => {
    setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkX2F0IjoiMjAyMi0xMS0yMlQxODoyMjoxMS44Mzk2OTM4NTFaIiwidXNlcl9pZCI6OTMxfQ.OVnZB3PEC7TWl4p07jN-26PMFyyfL9xg_F3rSPzOaNE')
  })

  // Initialize Apollo Client and add "Authorization" header
  const httpLink = createHttpLink({
    uri: 'https://simplisaleshw.cotunnel.com/graphql'
  })

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })

  // Initialize react navigate
  const Stack = createNativeStackNavigator()

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'none'
          }}
        >
          {token ? <Stack.Screen name="Home" component={Home} /> : <Stack.Screen name="Login" component={Login} />}
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  )
}
