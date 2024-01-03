import React from 'react'
import { View, Text } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'

const CustomDrawerContent = ({ navigation }: any) => {
  return (
    <DrawerContentScrollView>
      <View>
        <Text>Hello world</Text>
      </View>
    </DrawerContentScrollView>
  )
}

export default CustomDrawerContent
