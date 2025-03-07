import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Text, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const FavoritesScreen = ({ navigation }) => {
  const theme = useTheme();
  // TODO: Implement favorites storage and retrieval
  const favorites = [];

  const RecipeCard = ({ recipe }) => (
    <Card
      style={styles.card}
      onPress={() => navigation.navigate('RecipeDetail', { recipe })}
    >
      <Card.Cover source={{ uri: recipe.image }} style={styles.cardImage} />
      <Card.Content>
        <Title style={styles.cardTitle}>{recipe.name}</Title>
        <Paragraph style={styles.meta}>
          {recipe.prepTime} • {recipe.difficulty}
        </Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {favorites.length > 0 ? (
        <ScrollView contentContainerStyle={styles.content}>
          {favorites.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.emptyState}>
          <MaterialCommunityIcons name="heart-outline" size={64} color={theme.colors.primary} />
          <Text style={styles.emptyStateText}>
            No favorite recipes yet.{'\n'}
            Add some recipes to your favorites!
          </Text>
        </View>
      )}
    </View>
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
    borderRadius: 12,
  },
  cardImage: {
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardTitle: {
    fontSize: 16,
    marginTop: 8,
  },
  meta: {
    fontSize: 14,
    opacity: 0.7,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyStateText: {
    marginTop: 16,
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.7,
  },
});

export default FavoritesScreen;
