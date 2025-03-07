import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import CategoryRecipesScreen from './src/screens/CategoryRecipesScreen';
import RecipeDetailScreen from './src/screens/RecipeDetailScreen';

// Import theme
import { theme } from './src/theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTintColor: '#fff',
    }}
  >
    <Stack.Screen 
      name="HomeScreen" 
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name="CategoryRecipes" 
      component={CategoryRecipesScreen}
      options={({ route }) => ({
        title: route.params.category.charAt(0).toUpperCase() + route.params.category.slice(1),
      })}
    />
    <Stack.Screen 
      name="RecipeDetail" 
      component={RecipeDetailScreen}
      options={({ route }) => ({
        title: route.params.recipe.name,
      })}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Search') {
                iconName = focused ? 'magnify' : 'magnify';
              } else if (route.name === 'Favorites') {
                iconName = focused ? 'heart' : 'heart-outline';
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
          <Tab.Screen 
            name="Home" 
            component={HomeStack} 
            options={{ headerShown: false }}
          />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
