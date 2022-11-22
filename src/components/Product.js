import { StyleSheet, Text, View } from 'react-native'

export default ({ product }) => {
  const styles = StyleSheet.create({
    product: {
      shadowColor: '#FF0000',
      borderRadius: 10,
      backgroundColor: '#FFFFFF',
      padding: 20,
      marginVertical: 5,
      marginHorizontal: 10,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    details: {
      marginTop: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    size: {
      color: '#475569'
    },
    price: {
      color: '#22C55E'
    }
  })

  return (
    <View style={styles.product}>
      <Text>{product.description1}</Text>
      <View style={styles.details}>
        <Text style={styles.size}>{product.pSize}</Text>
        <Text style={styles.price}>₺ {product.price.price.price}</Text>
      </View>
    </View>
  )
}
