import { useEffect } from 'react'

import { ActivityIndicator, FlatList, View } from 'react-native'

import Product from '../components/Product'
import useGetProducts from '../hooks/useGetProducts'

export default ({ navigation }) => {
  const [products, reset, loading, addMore] = useGetProducts()

  useEffect(() => {
    return navigation.addListener('focus', reset)
  }, [navigation])

  return (
    <View>
      <FlatList
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 40 }}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Product product={item} />}
        onEndReached={addMore}
        ListFooterComponent={loading && <ActivityIndicator size="large" />}
      />
    </View>
  )
}
