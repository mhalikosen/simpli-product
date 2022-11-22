import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Import icon pack
import Ionicons from '@expo/vector-icons/Ionicons'

// Import pages
import Products from './Products'
import MyOrders from './MyOrders'
import MyAccount from './MyAccount'

const Tab = createBottomTabNavigator()

export default ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Ürünler"
        component={Products}
        options={{ tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'pricetags-outline' : 'pricetags'} size={size} color={color} /> }}
      />
      <Tab.Screen name="Siparişlerim" component={Orders} options={{ tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'basket-outline' : 'basket'} size={size} color={color} /> }} />
      <Tab.Screen
        name="Hesabım"
        component={MyAccount}
        options={{ tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'person-circle-outline' : 'person-circle'} size={size} color={color} /> }}
      />
    </Tab.Navigator>
  )
}
