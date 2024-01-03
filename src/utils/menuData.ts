import HomeIndex from '../screens/home'
import CartIndex from '../screens/carts'
// import homeSvg from '../svgs/HomeSvg'
// import ProductDetails from '../screens/products/ProductDetails'

interface Menuprops {
  name: string
  Link: string
  component: any
  icon: string | React.JSX.Element
  ActiveIcon: string
  hidden: boolean
}

export const menuTabs: Menuprops[] = [
  {
    name: 'Home',
    Link: 'HomeIndex',
    component: HomeIndex,
    icon: 'home-outline',
    ActiveIcon: 'home',
    hidden: false
  },
  {
    name: 'Cart',
    Link: 'Cart',
    component: CartIndex,
    icon: 'cart-outline',
    ActiveIcon: 'cart',
    hidden: false
  }
  // {
  //   name: 'ProductDetails',
  //   Link: 'ProductDetails',
  //   component: ProductDetails,
  //   icon: '',
  //   ActiveIcon: '',
  //   hidden: false
  // }
]
