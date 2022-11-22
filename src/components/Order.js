import { StyleSheet, Text, View } from 'react-native'

export default ({ order }) => {
  const styles = StyleSheet.create({
    order: {
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
    orderDate: {
      color: '#475569'
    },
    total: {
      color: '#22C55E'
    }
  })

  const date = new Date(order.orderDate)

  return (
    <View style={styles.order}>
      <Text>{order.orderName}</Text>
      <View style={styles.details}>
        <Text style={styles.orderDate}>{date.getDate() + '/' + parseInt(date.getMonth() + 1) + '/' + date.getFullYear()}</Text>
        <Text style={styles.total}>₺ {order.total}</Text>
      </View>
    </View>
  )
}
