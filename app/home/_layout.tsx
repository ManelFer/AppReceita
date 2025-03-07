import { Stack } from 'expo-router';
import { theme } from '../../src/theme';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: '#fff',
      }}
    />
  );
}
