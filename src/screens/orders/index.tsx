/* eslint-disable indent */
import Ionicons from '@expo/vector-icons/Ionicons'
import { Link } from '@react-navigation/native'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  Pressable
} from 'react-native'
import Container from '../../components/container'

const { width } = Dimensions.get('window')
const OrderIndex = ({ navigation }: any) => {
  return (
    <Container isScrollable style={{ position: 'relative' }}>
      <View style={styles.innerContainer}>
        {/* CARD */}
        <View style={[styles.cardSm, boxShadow]}>
          <Text style={styles.cardSmText}>
            if you proceed, you are automatically accepting our
            <Link to={'/app/terms'} style={styles.link}>
              Terms & Conditions
            </Link>
          </Text>
        </View>
        {/* CARD */}
        <View style={styles.summaryContainer}>
          <Text style={styles.summary}>order summary</Text>
        </View>
        {/* PRODUCTCARD */}
        <View style={[styles.productCard, boxShadow]}>
          <View style={styles.productItem}>
            <Text style={styles.itemText}>Item&apos;s total (1)</Text>
            <Text style={styles.itemText}>Delivery fees</Text>
            <View style={styles.divider} />
            <Text style={styles.itemText}>Total</Text>
            <View style={styles.divider} />
          </View>
          <View>
            <Text style={styles.itemTextValue}>#32,800</Text>
            <Text style={[styles.itemTextValue, { paddingTop: 12 }]}>
              #6850
            </Text>
            <Text style={[styles.itemTextValue, { paddingTop: 24 }]}>
              #39650
            </Text>
          </View>
        </View>
        {/* END OF PRODUCTCARD */}
        {/* PAYMENTCARD */}
        <View>
          <View style={styles.paymentTextContainer}>
            <Text style={styles.summary}>payment method</Text>
            <Pressable>
              <Text>Change</Text>
            </Pressable>
          </View>
          {/* CARD */}
          <View style={[styles.smPaymentCard, boxShadow2, { borderRadius: 4 }]}>
            <View style={styles.iconContainer}>
              <Ionicons name="shield-checkmark" />
            </View>
            <View>
              <Text style={styles.payText}>
                Pay with Cards, Bank Transfer or USSD
              </Text>
              <Text style={styles.paySubText}>
                You will be redirected to secure order page
              </Text>
            </View>
          </View>
          {/* END OF CARD */}
        </View>
        {/* END OF PAYMENTCARD */}
        {/* ADDRESS */}
        <View>
          <View style={styles.paymentTextContainer}>
            <Text style={styles.summary}>delivery address</Text>
            <Pressable>
              <Text>Change your address</Text>
            </Pressable>
          </View>
          {/* CARD */}
          <View style={[styles.addCard, boxShadow2, { borderRadius: 4 }]}>
            <View style={styles.addIconContainer}>
              <Ionicons name="location" />
            </View>
            <View>
              <Text style={styles.addName}>Samuel Christopher</Text>
              <Text style={styles.address}>
                43 nouachott street wuse zone 1
              </Text>
            </View>
          </View>
          {/* END OF CARD */}
        </View>
        {/* END OF ADDRESS */}
        <View style={styles.orderContainer}>
          <Pressable
            style={styles.orderBtn}
            onPress={() => {
              navigation.navigate('Payments')
            }}
          >
            <Text style={styles.orderText}>Confirm Order</Text>
          </Pressable>
        </View>
      </View>
    </Container>
  )
}

export default OrderIndex

const boxShadow =
  Platform.OS === 'ios'
    ? {
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.6,
        shadowColor: 'rgba(0,0,0)'
      }
    : { elevation: 2, borderColor: '#e5e5e5', borderWidth: 1 }
const boxShadow2 =
  Platform.OS === 'ios'
    ? {
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.6,
        shadowColor: 'rgba(0,0,0)'
      }
    : { elevation: 4, borderColor: '#ccc', borderWidth: 1 }
const styles = StyleSheet.create({
  innerContainer: {
    // paddingTop: 12
    // paddingHorizontal: 12
  },
  cardSm: {
    width,
    backgroundColor: '#fff',
    padding: 8
  },
  cardSmText: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'WorkSans_500Medium',
    fontSize: 12,
    fontStyle: 'normal'
  },
  link: {
    color: 'rgb(69, 118, 194)'
  },
  summaryContainer: {
    paddingVertical: 12,
    paddingHorizontal: 12
  },
  summary: {
    color: '#5e5e5e',
    fontFamily: 'WorkSans_500Medium',
    fontSize: 16,
    fontStyle: 'normal',
    textTransform: 'uppercase'
  },
  productCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 20
  },
  divider: {
    marginVertical: 12,
    width: '300%',
    height: 1,
    backgroundColor: '#e5e5e5'
  },
  productItem: {},
  itemText: {
    paddingBottom: 5,
    color: '#000',
    fontFamily: 'WorkSans_500Medium',
    fontSize: 16,
    fontStyle: 'normal',
    textTransform: 'capitalize'
  },
  itemTextValue: {
    color: '#000',
    fontFamily: 'WorkSans_700Bold',
    fontSize: 16,
    fontStyle: 'normal',
    textTransform: 'capitalize'
  },
  deliveryBorder: {
    color: '#000',
    fontFamily: 'WorkSans_500Medium',
    fontSize: 16,
    fontStyle: 'normal',
    textTransform: 'capitalize',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    paddingBottom: 6,
    width: 320
  },
  paymentTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 12
  },
  smPaymentCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 8,
    padding: 14
  },
  iconContainer: {
    marginRight: 5
  },
  addIconContainer: {
    marginRight: 5,
    marginTop: 2
  },
  payText: {
    color: '#000',
    fontFamily: 'WorkSans_700Bold',
    fontSize: 16,
    fontStyle: 'normal',
    textTransform: 'capitalize'
  },
  paySubText: {
    color: '#000',
    fontFamily: 'WorkSans_500Medium',
    fontSize: 12,
    fontStyle: 'normal',
    textTransform: 'capitalize'
  },
  addCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    marginHorizontal: 8,
    padding: 14
  },
  addName: {
    color: '#000',
    fontFamily: 'WorkSans_700Bold',
    fontSize: 16,
    fontStyle: 'normal',
    textTransform: 'capitalize'
  },
  address: {
    color: '#000',
    fontFamily: 'WorkSans_500Medium',
    fontSize: 12,
    fontStyle: 'normal',
    textTransform: 'capitalize'
  },
  orderBtn: {
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 50,
    backgroundColor: '#000'
  },
  orderText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'WorkSans_500Medium',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    textTransform: 'uppercase'
  },
  orderContainer: {
    padding: 15,
    backgroundColor: '#fff',
    marginTop: 135,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
