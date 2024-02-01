import { Slot } from 'expo-router'
import { View } from 'react-native'
import Constants from 'expo-constants'

export default function Layout () {
  return (
    <View
      style={{
        paddingTop: Constants.statusBarHeight,
        flex: 1
      }}
    >
      <Slot />
    </View>
  )
}
