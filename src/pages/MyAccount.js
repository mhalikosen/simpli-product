import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'

import useGetMyAccount from '../hooks/useGetMyAccount'

export default () => {
  const styles = StyleSheet.create({
    body: {
      margin: 20
    },
    property: {
      marginVertical: 4,
      padding: 5,
      backgroundColor: '#0284C7',
      borderRadius: 3,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    text: {
      fontSize: 13,
      color: '#FFFFFF'
    }
  })

  const [{ name, companyName, contactName, contact, email, mobile, telephone, country, city, address1, creditLimit }, loading] = useGetMyAccount()

  return (
    <View style={styles.body}>
      {loading && <ActivityIndicator size="large" />}
      {email && (
        <View>
          <View style={styles.property}>
            <Text style={styles.text}>Ünvan</Text>
            <Text style={styles.text}>{name}</Text>
          </View>
          <View style={styles.property}>
            <Text style={styles.text}>Şirket İsmi</Text>
            <Text style={styles.text}>{companyName}</Text>
          </View>
          <View style={styles.property}>
            <Text style={styles.text}>Yetkili İsmi</Text>
            <Text style={styles.text}>{contactName}</Text>
          </View>
          <View style={styles.property}>
            <Text style={styles.text}>Yetkili İletişim</Text>
            <Text style={styles.text}>{contact}</Text>
          </View>
          <View style={styles.property}>
            <Text style={styles.text}>Eposta</Text>
            <Text style={styles.text}>{email}</Text>
          </View>
          <View style={styles.property}>
            <Text style={styles.text}>Mobil Telefon</Text>
            <Text style={styles.text}>{mobile}</Text>
          </View>
          <View style={styles.property}>
            <Text style={styles.text}>Sabit Telefon</Text>
            <Text style={styles.text}>{telephone}</Text>
          </View>
          <View style={styles.property}>
            <Text style={styles.text}>Ülke</Text>
            <Text style={styles.text}>{country}</Text>
          </View>
          <View style={styles.property}>
            <Text style={styles.text}>Şehir</Text>
            <Text style={styles.text}>{city}</Text>
          </View>
          <View style={styles.property}>
            <Text style={styles.text}>Adres</Text>
            <Text style={styles.text}>{address1}</Text>
          </View>
          <View style={styles.property}>
            <Text style={styles.text}>Kredi Limiti</Text>
            <Text style={styles.text}>{creditLimit}</Text>
          </View>
        </View>
      )}
    </View>
  )
}
