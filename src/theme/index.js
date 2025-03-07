import { MD3LightTheme } from 'react-native-paper';

export const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#E57373',
    secondary: '#FFB74D',
    background: '#FFF8E1',
    text: '#37474F',
    accent: '#81C784',
    surface: '#FFFFFF',
    error: '#FF5252',
    disabled: '#BDBDBD',
    card: '#FFFFFF',
    border: '#E0E0E0',
    notification: '#FF8A65',
  },
  roundness: 16,
  animation: {
    scale: 1.0,
  },
  fonts: {
    ...MD3LightTheme.fonts,
    titleLarge: {
      ...MD3LightTheme.fonts.titleLarge,
      fontSize: 28,
      fontWeight: 'bold',
    },
    titleMedium: {
      ...MD3LightTheme.fonts.titleMedium,
      fontSize: 20,
      fontWeight: '600',
    },
    bodyLarge: {
      ...MD3LightTheme.fonts.bodyLarge,
      fontSize: 16,
    },
  },
};
