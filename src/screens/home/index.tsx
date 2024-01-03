import { type NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  // FlatList,
  Pressable
} from 'react-native'
import { type RootStackParamList, type IProduct } from '../../../types'
import Container from '../../components/container'
import { productsData } from '../../utils/productsData'

type Props = NativeStackScreenProps<RootStackParamList, 'HomeIndex'>
const HomeIndex = ({ navigation }: Props) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const RenderProductItem = ({ name, image_url, id }: IProduct) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate('ProductDetails', { productId: id })
        }}
        style={styles.card}
      >
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image source={image_url} style={styles.cardImg} />
          <Text style={styles.cardTitle}>{name}</Text>
          <Text style={styles.cardLink}>Shop Now</Text>
          <View style={{ width: 88, height: 2, backgroundColor: '#000' }} />
        </View>
      </Pressable>
    )
  }
  return (
    <Container isScrollable style={{ flex: 1 }}>
      <View style={styles.imgContainer}>
        <Image
          source={require('../../../assets/images/hero_img.jpeg')}
          style={styles.img}
        />
        <View style={styles.cardWrapper}>
          {productsData.map((product) => (
            <RenderProductItem {...product} key={product.id} />
          ))}
        </View>
      </View>
      {/* <FlatList
        data={productsData}
        renderItem={RenderProductItem}
        keyExtractor={(item) => item.name}
      /> */}
    </Container>
  )
}

export default HomeIndex

const styles = StyleSheet.create({
  imgContainer: {
    paddingTop: 28,
    paddingHorizontal: 16,
    paddingBottom: 20,
    backgroundColor: '#fff'
  },
  img: {
    width: 351,
    height: 195
  },
  cardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12
  },
  card: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F1F1F1',
    width: 170,
    height: 210
  },
  cardImg: {
    width: 111,
    height: 111
  },
  cardTitle: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 18,
    fontStyle: 'normal'
  },
  cardLink: {
    paddingTop: 17,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'WorkSans_500Medium',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    textTransform: 'uppercase'
  }
})
