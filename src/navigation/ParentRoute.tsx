import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Drawers from './drawers/Drawers'
import ProductDetails from '../screens/products/ProductDetails'
import BottomNavBar from './tabs/BottomNavBar'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import CartIndex from '../screens/carts'
import OrderIndex from '../screens/orders'

const Stack = createStackNavigator()

const NavigationLayout = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Drawers"
          component={Drawers}
        />
        <Stack.Screen
          options={({ route, navigation }) => ({
            title: `Details: ${route?.params?.productId}`,
            headerShown: true,
            headerRight: () => (
              <Pressable
                style={styles.cartIcon}
                onPress={() => {
                  navigation.navigate('Cart')
                }}
              >
                <Ionicons name="cart" size={30} color="#222" />
                <View style={styles.badgeContainer}>
                  <Text style={styles.badgeText}>0</Text>
                </View>
              </Pressable>
            )
          })}
          name="ProductDetails"
          component={ProductDetails}
        />
        <Stack.Screen
          options={{
            headerShown: true
          }}
          name="Cart"
          component={CartIndex}
        />
        <Stack.Screen
          options={{
            headerShown: true
          }}
          name="Place your order"
          component={OrderIndex}
        />
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="BottomNavBar"
          component={BottomNavBar}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationLayout

const styles = StyleSheet.create({
  cartIcon: {
    position: 'relative',
    marginRight: 12
  },
  badgeContainer: {
    position: 'absolute',
    zIndex: 1,
    right: 0,
    top: -2,
    backgroundColor: '#222',
    width: 20,
    height: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  badgeText: {
    color: '#fff',
    fontFamily: 'WorkSans_700Bold'
  }
})
