import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import { AppState } from 'react-native'

const supabaseUrl = process.env.SUPABASE_URL ?? ''
const supabaseAnonKey = process.env.SUPABASE_KEY ?? ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false
  }
})

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
      .catch((error) => console.error('Error with auto-refresh', error))
  } else {
    supabase.auth.stopAutoRefresh()
      .catch((error) => console.error('Error with auto-refresh', error))
  }
})
