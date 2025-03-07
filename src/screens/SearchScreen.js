import React, { useState, useCallback } from 'react';
import { View, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { Searchbar, Chip, Card, Title, Text, useTheme, Surface } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { recipes } from '../data/recipes';

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);
  const theme = useTheme();

  const filters = [
    { id: 'quick', label: 'Quick (< 20min)', icon: 'clock-fast' },
    { id: 'easy', label: 'Easy', icon: 'star-outline' },
    { id: 'vegetarian', label: 'Vegetarian', icon: 'leaf' },
  ];

  const toggleFilter = (filterId) => {
    setActiveFilters(prev =>
      prev.includes(filterId)
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  const getAllRecipes = () => {
    return Object.values(recipes).flat();
  };

  const filterRecipes = useCallback(() => {
    let filtered = getAllRecipes();

    // Search by name or category
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(recipe =>
        recipe.name.toLowerCase().includes(query) ||
        recipe.category.toLowerCase().includes(query)
      );
    }

    // Apply filters
    if (activeFilters.includes('quick')) {
      filtered = filtered.filter(recipe =>
        parseInt(recipe.prepTime) < 20
      );
    }
    if (activeFilters.includes('easy')) {
      filtered = filtered.filter(recipe =>
        recipe.difficulty.toLowerCase() === 'easy'
      );
    }
    // Add more filter logic as needed

    return filtered;
  }, [searchQuery, activeFilters]);

  const RecipeCard = ({ recipe }) => (
    <Card
      style={styles.card}
      onPress={() => navigation.navigate('RecipeDetail', { recipe })}
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
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Surface style={styles.header} elevation={2}>
        <Searchbar
          placeholder="Search recipes..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
          inputStyle={styles.searchInput}
          icon={() => (
            <MaterialCommunityIcons name="magnify" size={24} color={theme.colors.primary} />
          )}
          clearIcon={() => (
            <MaterialCommunityIcons name="close" size={24} color={theme.colors.primary} />
          )}
        />
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.filtersContainer}
          contentContainerStyle={styles.filtersContent}
        >
          {filters.map(filter => (
            <Chip
              key={filter.id}
              selected={activeFilters.includes(filter.id)}
              onPress={() => toggleFilter(filter.id)}
              style={[
                styles.filterChip,
                activeFilters.includes(filter.id) && { backgroundColor: theme.colors.primary + '20' }
              ]}
              icon={() => (
                <MaterialCommunityIcons 
                  name={filter.icon} 
                  size={18} 
                  color={activeFilters.includes(filter.id) ? theme.colors.primary : theme.colors.text} 
                />
              )}
              selectedColor={theme.colors.primary}
            >
              {filter.label}
            </Chip>
          ))}
        </ScrollView>
      </Surface>

      <ScrollView 
        style={styles.results} 
        contentContainerStyle={styles.resultsContent}
        showsVerticalScrollIndicator={false}
      >
        {filterRecipes().map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
    paddingTop: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  searchBar: {
    marginHorizontal: 16,
    borderRadius: 12,
    elevation: 0,
    backgroundColor: '#F5F5F5',
  },
  searchInput: {
    fontSize: 16,
  },
  filtersContainer: {
    marginTop: 16,
    marginBottom: 8,
  },
  filtersContent: {
    paddingHorizontal: 16,
  },
  filterChip: {
    marginRight: 8,
    borderRadius: 20,
  },
  results: {
    flex: 1,
  },
  resultsContent: {
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

export default SearchScreen;
