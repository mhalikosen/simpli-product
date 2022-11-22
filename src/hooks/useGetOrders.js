import { useEffect, useState } from 'react'

import { gql, useQuery } from '@apollo/client'

export default (startDate, endDate) => {
  const [orders, setOrders] = useState([])

  const GET_ORDERS = gql`
    query Orders($startDate: String, $endDate: String) {
      orders(startDate: $startDate, endDate: $endDate) {
        id
        orderName
        orderDate
        total
      }
    }
  `

  const { data, loading } = useQuery(GET_ORDERS, {
    variables: {
      startDate,
      endDate
    }
  })

  useEffect(() => {
    setOrders(data?.orders ? data.orders : [])
  }, [data])

  return [orders, loading]
}
