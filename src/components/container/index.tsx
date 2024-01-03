import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'

interface Props {
  children: React.ReactNode
  isScrollable: boolean
  style?: object
}

const Container = ({ children, isScrollable, style }: Props) => {
  return (
    <SafeAreaView style={styles.outerView}>
      {isScrollable ? (
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View>{children}</View>
        </ScrollView>
      ) : (
        <View style={[styles.innerView, style]}>{children}</View>
      )}
    </SafeAreaView>
  )
}

export default Container

const styles = StyleSheet.create({
  outerView: {
    flex: 1
  },
  innerView: {
    flex: 1
  }
})
