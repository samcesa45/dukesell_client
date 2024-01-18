import FontAwesome from '@expo/vector-icons/FontAwesome'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { useColorScheme, Text } from 'react-native'
import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_700Bold,
  PlayfairDisplay_900Black
} from '@expo-google-fonts/playfair-display'
import {
  WorkSans_400Regular,
  WorkSans_500Medium,
  WorkSans_700Bold
} from '@expo-google-fonts/work-sans'
import NavigationLayout from './src/navigation/ParentRoute'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://c52b-105-112-122-107.ngrok-free.app/graphql',
  cache: new InMemoryCache()
})

const App = () => {
  const [loaded] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_900Black,
    PlayfairDisplay_700Bold,
    WorkSans_400Regular,
    WorkSans_500Medium,
    WorkSans_700Bold,
    ...FontAwesome.font,
    ...MaterialCommunityIcons.font,
    ...Ionicons.font
  })

  if (!loaded) {
    return <Text>Loading...</Text>
  }
  return <RootLayoutNav />
}

export default App
const RootLayoutNav = () => {
  const colorScheme = useColorScheme()

  return (
    <ApolloProvider client={client}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <NavigationLayout />
      </ThemeProvider>
    </ApolloProvider>
  )
}
