import React from 'react';
import { View, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { Card, Title, Text, useTheme, Surface } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

const categories = [
  { id: 'breakfast', name: 'Café', icon: 'coffee', image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=480' },
  { id: 'lunch', name: 'Almoço', icon: 'food', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=480' },
  { id: 'snack', name: 'Lanche', icon: 'cookie', image: 'https://images.unsplash.com/photo-1504387432042-8aca7c138087?w=480' },
  { id: 'dinner', name: 'Almoço', icon: 'food-variant', image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=480' },
];

const HomeScreen = () => {
  const theme = useTheme();

  const CategoryCard = ({ category }) => (
    <Card
      style={styles.card}
      onPress={() => router.push(`/home/category/${category.id}`)}
    >
      <ImageBackground
        source={{ uri: category.image }}
        style={styles.cardBackground}
        imageStyle={styles.cardImage}
      >
        <Surface style={styles.cardOverlay}>
          <MaterialCommunityIcons name={category.icon} size={32} color={theme.colors.primary} />
          <Title style={styles.cardTitle}>{category.name}</Title>
        </Surface>
      </ImageBackground>
    </Card>
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <Title style={[styles.title, { color: theme.colors.text }]}>
          Seu livro de receitas
        </Title>
        <Text style={[styles.subtitle, { color: theme.colors.text }]}>
          O que você gostaria de cozinhar hoje?
        </Text>
      </View>
      <View style={styles.grid}>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 24,
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.8,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 12,
    justifyContent: 'space-between',
  },
  card: {
    width: '47%',
    marginBottom: 16,
    elevation: 4,
    borderRadius: 16,
    overflow: 'hidden',
  },
  cardBackground: {
    height: 180,
    justifyContent: 'flex-end',
  },
  cardImage: {
    borderRadius: 16,
  },
  cardOverlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 16,
    alignItems: 'center',
    elevation: 0,
  },
  cardTitle: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
