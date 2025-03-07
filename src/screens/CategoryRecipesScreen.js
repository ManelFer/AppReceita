import React from 'react';
import { View, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { Card, Title, Text, useTheme, Surface } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { recipes } from '../data/recipes';

const CategoryRecipesScreen = ({ category }) => {
  const theme = useTheme();
  const router = useRouter();
  const categoryRecipes = recipes[category] || [];

  const RecipeCard = ({ recipe }) => (
    <Card
      style={styles.card}
      onPress={() => router.push(`/home/recipe/${recipe.id}`)}
    >
      <ImageBackground
        source={{ uri: recipe.image }}
        style={styles.cardBackground}
        imageStyle={styles.cardImage}
      >
        <Surface style={styles.cardOverlay}>
          <View style={styles.cardContent}>
            <Title style={styles.cardTitle}>{recipe.name}</Title>
            <View style={styles.cardMeta}>
              <View style={styles.metaItem}>
                <MaterialCommunityIcons name="clock-outline" size={16} color={theme.colors.primary} />
                <Text style={styles.metaText}>{recipe.prepTime}</Text>
              </View>
              <View style={styles.metaItem}>
                <MaterialCommunityIcons name="chef-hat" size={16} color={theme.colors.primary} />
                <Text style={styles.metaText}>{recipe.difficulty}</Text>
              </View>
            </View>
          </View>
        </Surface>
      </ImageBackground>
    </Card>
  );

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.content}
    >
      {categoryRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    elevation: 4,
    borderRadius: 16,
    overflow: 'hidden',
  },
  cardBackground: {
    height: 200,
  },
  cardImage: {
    borderRadius: 16,
  },
  cardOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    elevation: 0,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  cardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  metaText: {
    marginLeft: 4,
    fontSize: 14,
    opacity: 0.8,
  },
});

export default CategoryRecipesScreen;
