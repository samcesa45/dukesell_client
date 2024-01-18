/* eslint-disable @typescript-eslint/indent */
import { type NavigationProp, type RouteProp } from '@react-navigation/native'

export interface IProduct {
  id: string
  name: string
  description: string
  price: string
  imageUrl: string
}

export interface RootStackParamList {
  HomeIndex: undefined
  ProductDetails: {
    productId: string
    prodName: string
  }
}

export type ProductDetailsRouteProp = RouteProp<
  RootStackParamList,
  'ProductDetails'
>
export type ProductDetailsNavigationProp = NavigationProp<
  RootStackParamList,
  'ProductDetails'
>
