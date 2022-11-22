// Contexts
import AuthContextProvider from './contexts/AuthContext'

// Import Navigation
import Navigation from './Navigation'

export default () => {
  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  )
}
