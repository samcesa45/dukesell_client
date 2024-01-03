import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import {
  type ProductDetailsNavigationProp,
  type ProductDetailsRouteProp
} from '../../../types'
import Container from '../../components/container'
interface ProductDetailsProps {
  route: ProductDetailsRouteProp
  navigation: ProductDetailsNavigationProp
}

const ProductDetails = ({ route, navigation }: ProductDetailsProps) => {
  const { productId } = route.params
  console.log(productId)
  return (
    <Container isScrollable>
      <View style={styles.innerContainer}>
        <View style={styles.productWrapper}>
          <View style={styles.imgContainer}>
            <Image source={require('../../../assets/images/art.png')} />
          </View>
          <View style={styles.descContainer}>
            <Text style={styles.title}>Artsy</Text>
            <Text style={styles.subtitle}>Wallet with chain</Text>
            <Text style={styles.price}>$ 256</Text>
            <Pressable
              onPress={() => {
                console.log('buy')
              }}
              style={styles.btn}
            >
              <Text style={styles.btnText}>Buy Now</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.btnLink}>Add to cart</Text>
              <View style={styles.underline} />
            </Pressable>
          </View>
        </View>
      </View>
    </Container>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  innerContainer: {
    paddingTop: 39,
    paddingHorizontal: 12
  },
  productWrapper: {
    flexDirection: 'row'
  },
  imgContainer: {
    width: 170,
    height: 155
  },
  title: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 22,
    fontStyle: 'normal'
  },
  subtitle: {
    color: '#000',
    fontFamily: 'WorkSans_400Regular',
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: 21
  },
  descContainer: {
    alignItems: 'flex-start'
  },
  price: {
    marginTop: 9,
    color: '#000',
    fontFamily: 'WorkSans_700Bold',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700'
  },
  btn: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 97,
    height: 31,
    backgroundColor: '#000'
  },
  btnText: {
    color: '#FBFBFB',
    textAlign: 'center',
    fontFamily: 'WorkSans_500Medium',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    textTransform: 'uppercase'
  },
  btnLink: {
    paddingTop: 15,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'WorkSans_500Medium',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    textTransform: 'uppercase'
  },
  underline: {
    width: 94,
    height: 2,
    backgroundColor: '#000'
  }
})
