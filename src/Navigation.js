import { useContext } from 'react'

// React Naviation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Auth Context
import { AuthContext } from './contexts/AuthContext'

// Import pages
import Login from './pages/Login'
import Home from './pages/Home'

export default () => {
  // Initialize react navigate
  const Stack = createNativeStackNavigator()

  // Check for token
  const { token } = useContext(AuthContext)

  return (
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
  )
}
