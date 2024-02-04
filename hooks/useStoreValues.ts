import { useEffect, useState } from 'react'
import * as SecureStore from 'expo-secure-store'

export const useStoreValues = (key: string) => {
  const [value, setValue] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    SecureStore.getItemAsync(key)
      .then(setValue)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [key])

  return { value, loading }
}
