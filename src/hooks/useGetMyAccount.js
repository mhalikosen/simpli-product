import { useEffect, useState } from 'react'

import { gql, useQuery } from '@apollo/client'

export default () => {
  const [myAccount, setMyAccount] = useState([])

  const GET_MY_ACCOUNT = gql`
    query User {
      user {
        name
        companyName
        contactName
        contact
        email
        mobile
        telephone
        country
        city
        address1
        creditLimit
      }
    }
  `

  const { data, loading } = useQuery(GET_MY_ACCOUNT)

  useEffect(() => {
    setMyAccount(data?.user ? data.user : [])
  }, [data])

  return [myAccount, loading]
}
