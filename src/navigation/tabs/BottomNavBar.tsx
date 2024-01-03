/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  Keyboard,
  SafeAreaView,
  Pressable,
  View,
  useColorScheme
} from 'react-native'
import tw from 'twrnc'
import { menuTabs } from '../../utils/menuData'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { globalStyles } from '../../constants/globalStyles'
import Colors from '../../constants/Colors'

interface Props {
  navigation: any
}
const Tab = createBottomTabNavigator()

const BottomNavBar = ({ navigation }: Props) => {
  const [active, setActive] = useState('Home')
  const colorScheme = useColorScheme()
  const bottomNavRef = useRef(null)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (bottomNavRef.current) {
          bottomNavRef.current.setNativeProps({
            style: { display: 'none', overflow: 'hidden' }
          })
        }
      }
    )

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (bottomNavRef.current) {
          bottomNavRef.current.setNativeProps({
            style: { display: 'flex', overflow: 'visible' }
          })
        }
      }
    )

    return () => {
      keyboardDidShowListener.remove()
      keyboardDidHideListener.remove()
    }
  }, [bottomNavRef])

  return (
    <Tab.Navigator
      tabBar={(props) => (
        <SafeAreaView
          ref={bottomNavRef}
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 69,
              height: 65,
              elevation: 1,
              marginBottom: 20,
              paddingHorizontal: 32,
              marginHorizontal: 12,
              backgroundColor: Colors[colorScheme ?? 'light'].background
            }
          ]}
        >
          {props.state.routes.map((route, index) => {
            const { options } = props.descriptors[route.key]
            const label = options.tabBarLabel ?? options.title ?? route.name

            const menuTab = menuTabs.find(
              (tab) => tab.name === label && tab.Link === route.name
            )

            return (
              <Pressable
                onPress={() => {
                  navigation.navigate(`${route.name}`)
                  setActive(label)
                  if (label === 'Home') {
                    navigation.navigate('HomeIndex')
                  }
                }}
                key={route.key}
              >
                {menuTab != null && (
                  <View
                    key={label}
                    style={tw.style(
                      'justify-center items-center mr-[64px] relative pt-2',
                      menuTab.hidden ? 'hidden' : 'flex'
                    )}
                  >
                    <Ionicons
                      name={
                        active === label ? menuTab.ActiveIcon : menuTab.icon
                      }
                      color={
                        active === label
                          ? colorScheme === 'light'
                            ? globalStyles.primaryColor
                            : colorScheme === 'dark'
                              ? 'white'
                              : 'black'
                          : colorScheme === 'dark'
                            ? 'gray'
                            : 'black'
                      }
                      size={24}
                    />
                  </View>
                )}
              </Pressable>
            )
          })}
        </SafeAreaView>
      )}
    >
      {menuTabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.Link}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarLabel: tab.name,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name={tab.icon}
                color={color}
                size={size}
              />
            )
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

export default BottomNavBar
