import { gql } from '@apollo/client'

export const GET_ALL_PRODUCTS = gql`
  query {
    getAllProducts {
      id
      name
      description
      price
      imageUrl
    }
  }
`
export const GET_PRODUCT_BY_ID = gql`
  query GetProduct($prodId: Float!) {
    getProduct(prodId: $prodId) {
      description
      id
      imageUrl
      name
      price
      quantity
    }
  }
`
