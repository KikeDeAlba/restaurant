import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function WaiterIndex () {
  return (
    <View>
      <Text>Hello World</Text>
      <Link href='/'>Go to Index</Link>
    </View>
  )
}
