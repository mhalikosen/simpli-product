import { useEffect } from 'react'

import { ActivityIndicator, FlatList, View } from 'react-native'

import useGetProducts from '../hooks/useGetProducts'

import Product from '../components/Product'

export default ({ navigation }) => {
  const [products, loading, addMore] = useGetProducts()

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
