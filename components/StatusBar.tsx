import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { Platform } from 'react-native'

const StatusBar = () => {
  return (
    <ExpoStatusBar 
      style="light" 
      backgroundColor={Platform.OS === 'android' ? '#2563eb' : undefined}
      translucent={false}
    />
  )
}

export default StatusBar