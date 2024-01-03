import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput
} from 'react-native'
import Container from '../../components/container'

const CartIndex = ({ navigation }: any) => {
  const [text, setText] = useState('')
  return (
    <Container isScrollable style={{ flex: 1, marginTop: 53 }}>
      <View style={styles.innerContainer}>
        <View style={{ alignItems: 'flex-start' }}>
          <View style={styles.imgContainer}>
            <Image source={require('../../../assets/images/art.png')} />
          </View>
          <View style={styles.btnWrapper}>
            <Pressable style={styles.addBtn}>
              <Text style={styles.btnText}>+</Text>
            </Pressable>
            <TextInput
              style={styles.textInput}
              placeholder="1"
              onChangeText={(newText) => {
                setText(newText)
              }}
              defaultValue={text}
            />
            <Pressable style={styles.addBtn}>
              <Text style={styles.btnText}>-</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Artsy</Text>
          <Text style={styles.subtitle}>Wallet with chain</Text>
          <Text style={styles.price}>$ 256</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.innerContainer}>
        <View style={{ alignItems: 'flex-start' }}>
          <View style={styles.imgContainer}>
            <Image source={require('../../../assets/images/art.png')} />
          </View>
          <View style={styles.btnWrapper}>
            <Pressable style={styles.addBtn}>
              <Text style={styles.btnText}>+</Text>
            </Pressable>
            <TextInput
              style={styles.textInput}
              placeholder="1"
              onChangeText={(newText) => {
                setText(newText)
              }}
              defaultValue={text}
            />
            <Pressable style={styles.addBtn}>
              <Text style={styles.btnText}>-</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Artsy</Text>
          <Text style={styles.subtitle}>Wallet with chain</Text>
          <Text style={styles.price}>$ 256</Text>
        </View>
      </View>
      <View style={styles.chkContainer}>
        <Pressable
          style={styles.checkoutBtn}
          onPress={() => {
            navigation.navigate('Place your order')
          }}
        >
          <Text style={styles.checkoutText}>Checkout</Text>
        </Pressable>
      </View>
    </Container>
  )
}

export default CartIndex

const styles = StyleSheet.create({
  innerContainer: {
    paddingTop: 79,
    flexDirection: 'row',
    paddingHorizontal: 12
  },
  imgContainer: {
    flexDirection: 'column',
    width: 81,
    height: 91,
    marginRight: 35
  },
  textContainer: {
    alignItems: 'flex-start'
  },
  title: {
    color: '#000',
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700'
  },
  subtitle: {
    color: '#000',
    fontFamily: 'WorkSans_400Regular',
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: 21
  },
  price: {
    marginTop: 9,
    color: '#000',
    fontFamily: 'WorkSans_700Bold',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700'
  },
  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#000',
    width: 50,
    height: 30
  },
  btnWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textInput: {
    marginTop: 20,
    width: 50,
    height: 30,
    backgroundColor: '#fff',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'WorkSans_500Medium',
    fontSize: 16,
    fontStyle: 'normal',
    textTransform: 'uppercase'
  },
  btnText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'WorkSans_700Bold',
    fontSize: 16,
    fontStyle: 'normal',
    textTransform: 'uppercase'
  },
  divider: {
    marginTop: 17,
    marginHorizontal: 12,
    width: 350,
    height: 1,
    backgroundColor: '#000'
  },
  checkoutBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 46,
    width: 187,
    height: 43,
    backgroundColor: '#000'
  },
  checkoutText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'WorkSans_500Medium',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    textTransform: 'uppercase'
  },
  chkContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
