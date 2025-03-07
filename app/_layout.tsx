import { Tabs } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../src/theme';

export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'home':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'search':
                iconName = focused ? 'magnify' : 'magnify';
                break;
              case 'favorites':
                iconName = focused ? 'heart' : 'heart-outline';
                break;
              default:
                iconName = 'circle';
            }

            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: '#fff',
        })}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            title: 'Favorites',
          }}
        />
      </Tabs>
    </PaperProvider>
  );
}
