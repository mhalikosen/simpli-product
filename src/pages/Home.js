import { useContext } from 'react'
import { View, Text, Button } from 'react-native'

import { AuthContext } from '../contexts/AuthContext'

const style = { flex: 1, alignItems: 'center', justifyContent: 'center' }

export default ({ navigation }) => {
  const { setToken } = useContext(AuthContext)
  return (
    <View style={style}>
      <Text>Home Screen</Text>
      <Button title="Logout" onPress={() => setToken('')} />
    </View>
  )
}
