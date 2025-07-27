import { Stack } from 'expo-router';
import StatusBar from '../components/StatusBar';
import { useFonts } from 'expo-font';

export default function Layout() {
  return (
    <>
      <StatusBar />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
