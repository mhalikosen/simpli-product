import { useEffect, useState } from 'react'

import { gql, useQuery } from '@apollo/client'

export default (page = 0, limit = 10) => {
  const [products, setProducts] = useState([])

  const [index, setIndex] = useState(page * limit)

  const addMore = () => {
    setIndex(index + limit)
  }

  const GET_PRODUCTS = gql`
    query Products($index: Int, $limit: Int) {
      products(index: $index, limit: $limit) {
        products {
          id
          code
          description1
          pSize
          price {
            price {
              price
            }
          }
        }
      }
    }
  `

  const { data, loading } = useQuery(GET_PRODUCTS, {
    variables: {
      index,
      limit
    }
  })

  useEffect(() => {
    const fetchedProducts = data?.products?.products ? data.products.products : []

    setProducts([...products, ...fetchedProducts])
  }, [data])

  return [products, loading, addMore]
}
