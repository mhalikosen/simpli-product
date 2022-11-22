import { useState, useContext, useEffect } from 'react'

import { StyleSheet, View, Text, Pressable, TextInput, Alert } from 'react-native'

import { gql, useMutation } from '@apollo/client'

import { AuthContext } from '../contexts/AuthContext'

export default () => {
  const styles = StyleSheet.create({
    body: {
      width: '100%',
      height: '100%',
      backgroundColor: '#eee'
    },
    container: {
      width: '100%',
      height: '100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
    header: {
      fontSize: 30,
      marginBottom: 10
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 10,
      marginHorizontal: 50,
      width: '100%',
      fontSize: 20,
      borderRadius: 10
    },
    button: {
      padding: 10,
      width: '100%',
      backgroundColor: '#0284C7',
      borderRadius: 10
    },
    buttonActive: {
      padding: 10,
      width: '100%',
      backgroundColor: '#0369A1',
      borderRadius: 10
    },
    buttonLoading: {
      padding: 10,
      opacity: 0.5,
      width: '100%',
      backgroundColor: '#0284C7',
      borderRadius: 10
    },
    buttonText: {
      fontSize: 25,
      textAlign: 'center',
      color: '#FFFFFF'
    }
  })

  const { setToken } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isButtonPressed, setIsButtonPressed] = useState(false)

  const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
      login(email: $email, password: $password)
    }
  `
  const [login, { data, loading, error, reset }] = useMutation(LOGIN, { onQueryUpdated: () => false, fetchPolicy: 'no-cache' })

  const loginHandler = () => {
    if (!email || !password) return Alert.alert('Giriş Yapılamadı', 'Lütfen eposta ve parolanızı girin.', [{ text: 'Tamam' }])

    login({
      variables: {
        email,
        password
      }
    })
  }

  // Error handler
  useEffect(() => {
    if (error) {
      Alert.alert('Giriş Yapılamadı', 'Eposta veya parola hatalı.', [{ text: 'Tamam' }])
      reset()
    }
  }, [error])

  // Data handler
  useEffect(() => {
    if (data?.login) {
      setToken(data.login)
    }
  }, [data])

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.header}>Giriş Yapın</Text>
        <TextInput style={styles.input} placeholder="Eposta" autoComplete="email" value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Parola" autoComplete="password" value={password} onChangeText={setPassword} secureTextEntry={true} />
        <Pressable
          // Disable button while loading
          disabled={loading}
          onPressIn={() => setIsButtonPressed(true)}
          onPressOut={() => setIsButtonPressed(false)}
          style={isButtonPressed ? styles.buttonActive : loading ? styles.buttonLoading : styles.button}
          onPress={loginHandler}
        >
          <Text style={styles.buttonText}>{loading ? 'Giriş yapılıyor...' : 'Giriş'}</Text>
        </Pressable>
      </View>
    </View>
  )
}
