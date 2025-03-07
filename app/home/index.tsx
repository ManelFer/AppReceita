import { Stack } from 'expo-router';
import HomeScreen from '../../src/screens/HomeScreen';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <HomeScreen />
    </>
  );
}
