import { View, StyleSheet, ActivityIndicator } from 'react-native'

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="rgba(96, 165, 250, 1)" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default Loader
