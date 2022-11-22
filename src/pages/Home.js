import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Import icon pack
import Ionicons from '@expo/vector-icons/Ionicons'

// Import pages
import Products from './Products'
import Orders from './Orders'
import User from './User'

const Tab = createBottomTabNavigator()

export default ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Ürünler"
        component={Products}
        options={{ tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'pricetags-outline' : 'pricetags'} size={size} color={color} /> }}
      />
      <Tab.Screen name="Siparişler" component={Orders} options={{ tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'basket-outline' : 'basket'} size={size} color={color} /> }} />
      <Tab.Screen
        name="Kullanıcı"
        component={User}
        options={{ tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'person-circle-outline' : 'person-circle'} size={size} color={color} /> }}
      />
    </Tab.Navigator>
  )
}
