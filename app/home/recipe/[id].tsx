import { useLocalSearchParams, Stack } from 'expo-router';
import RecipeDetailScreen from '../../../src/screens/RecipeDetailScreen';
import { recipes } from '../../../src/data/recipes';

export default function Recipe() {
  const { id } = useLocalSearchParams();
  const recipe = Object.values(recipes)
    .flat()
    .find(r => r.id === id);

  if (!recipe) return null;

  return (
    <>
      <Stack.Screen 
        options={{
          title: recipe.name,
          headerStyle: {
            backgroundColor: '#E57373',
          },
          headerTintColor: '#fff',
        }}
      />
      <RecipeDetailScreen recipe={recipe} />
    </>
  );
}
