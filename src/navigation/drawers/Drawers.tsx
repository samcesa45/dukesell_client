import {
  createDrawerNavigator,
  DrawerNavigationProp
} from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import {
  // Platform,
  Pressable,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'
import CustomDrawerContent from '../../common/CustomDrawerContent'
import BottomNavBar from '../tabs/BottomNavBar'
import HamburgerSvg from '../../svgs/HamburgerSvg'
import ProductDetails from '../../screens/products/ProductDetails'

const Drawer = createDrawerNavigator()

const Drawers = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerPosition: 'left',
        headerLeft: (props: any) => <Custom {...props} />,
        headerTitle: '',
        headerTransparent: false
      }}
    >
      <Drawer.Screen
        options={{
          headerShown: true
        }}
        name="BottomNavBar"
        component={BottomNavBar}
      />
    </Drawer.Navigator>
  )
}

export default Drawers
const Custom = () => {
  const navigation = useNavigation()

  return (
    <>
      <View style={styles.innerContainer}>
        <Pressable
          onPress={() => navigation.toggleDrawer()}
          style={({ pressed }) => [
            {
              color: pressed ? '#9B9B9B' : 'transparent',
              opacity: pressed ? 0.2 : 1
            }
          ]}
        >
          <HamburgerSvg />
        </Pressable>
        <Text style={styles.title}>bagzz</Text>
        <View style={[styles.avatar]}>
          <Image
            source={require('../../../assets/images/profile_img.jpg')}
            style={[styles.avatar]}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingTop: 53,
    paddingHorizontal: 16
  },
  title: {
    color: '#000',
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 22,
    fontStyle: 'normal',
    marginLeft: 18
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 32,
    marginLeft: 108
  },
  imgContainer: {
    paddingHorizontal: 16
  },
  img: {
    width: 351,
    height: 195
  }
})

// { opacity: pressed ? 0.5 : 1 }
