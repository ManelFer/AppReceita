import { useLocalSearchParams, Stack } from 'expo-router';
import CategoryRecipesScreen from '../../../src/screens/CategoryRecipesScreen';

export default function Category() {
  const { id } = useLocalSearchParams();
  const categoryName = id.toString().charAt(0).toUpperCase() + id.toString().slice(1);

  return (
    <>
      <Stack.Screen 
        options={{
          title: categoryName,
          headerStyle: {
            backgroundColor: '#E57373',
          },
          headerTintColor: '#fff',
        }}
      />
      <CategoryRecipesScreen category={id.toString()} />
    </>
  );
}
