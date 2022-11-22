import { useState } from 'react'

import { StyleSheet, Text, View, FlatList, ActivityIndicator, Pressable } from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker'

import useGetOrders from '../hooks/useGetOrders'

import Order from '../components/Order'

export default () => {
  const styles = StyleSheet.create({
    body: {
      flex: 1
    },
    buttonText: {
      marginVertical: 2,
      padding: 10,
      backgroundColor: '#0284C7',
      color: '#FFFFFF',
      borderRadius: 3,
      fontSize: 15
    },
    dateRange: {
      margin: 5,
      display: 'flex',
      flexDirection: 'column'
    }
  })

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const [showStartDatePicker, setShowStartDatePicker] = useState(false)
  const [showEndDatePicker, setShowEndDatePicker] = useState(false)

  const startDateChangeHandler = (event, selectedDate) => {
    setShowStartDatePicker(false)
    setStartDate(selectedDate)
  }

  const endDateChangeHandler = (event, selectedDate) => {
    setShowEndDatePicker(false)
    setEndDate(selectedDate)
  }

  const [orders, loading] = useGetOrders(startDate, endDate)

  return (
    <View style={styles.body}>
      <FlatList
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 20 }}
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Order order={item} />}
        ListHeaderComponent={loading && <ActivityIndicator size="large" />}
      />
      <View style={styles.dateRange}>
        <Pressable
          uppercase={false}
          onPress={() => {
            setShowStartDatePicker(true)
          }}
        >
          <Text style={styles.buttonText}>{`Başlangıç tarihi seçin: ${startDate.getDate() + '/' + parseInt(startDate.getMonth() + 1) + '/' + startDate.getFullYear()}`}</Text>
        </Pressable>
        <Pressable
          uppercase={false}
          onPress={() => {
            setShowEndDatePicker(true)
          }}
        >
          <Text style={styles.buttonText}>{`Bitiş tarihi seçin: ${endDate.getDate() + '/' + parseInt(endDate.getMonth() + 1) + '/' + endDate.getFullYear()}`}</Text>
        </Pressable>
      </View>
      {showStartDatePicker && <DateTimePicker value={startDate} mode="date" is24Hour={true} onChange={startDateChangeHandler} />}
      {showEndDatePicker && <DateTimePicker value={endDate} mode="date" is24Hour={true} onChange={endDateChangeHandler} />}
    </View>
  )
}
