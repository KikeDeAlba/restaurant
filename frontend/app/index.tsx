import { Link, router } from 'expo-router'
import { Text, View } from 'react-native'
import { useStoreValues } from '../hooks/useStoreValues'

export default function Index () {
  const { loading, value } = useStoreValues('token')

  if (loading) {
    return <Text>Loading...</Text>
  } else if (value != null) {
    return router.replace('/waiter')
  }

  return (
    <View>
      <Text>Hello World</Text>
      <Link href='/waiter'>Go to Waiter</Link>
    </View>
  )
}
