import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, ImageBackground } from 'react-native';
import { Title, Text, Card, IconButton, useTheme, Chip, Surface, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const RecipeDetailScreen = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const theme = useTheme();

  if (!recipe) return null;

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // TODO: Implement favorite storage functionality
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{ uri: recipe.image }}
          style={styles.image}
          resizeMode="cover"
        >
          <Surface style={styles.imageDarkOverlay} />
          <View style={styles.imageContent}>
            <Title style={styles.imageTitle}>{recipe.name}</Title>
            <View style={styles.chipContainer}>
              <Chip 
                icon="clock-outline" 
                style={[styles.chip, { backgroundColor: 'rgba(255, 255, 255, 0.9)' }]}
                textStyle={{ color: theme.colors.primary }}
              >
                {recipe.prepTime}
              </Chip>
              <Chip 
                icon="chef-hat" 
                style={[styles.chip, { backgroundColor: 'rgba(255, 255, 255, 0.9)' }]}
                textStyle={{ color: theme.colors.primary }}
              >
                {recipe.difficulty}
              </Chip>
            </View>
          </View>
          <IconButton
            icon={isFavorite ? 'heart' : 'heart-outline'}
            size={32}
            onPress={toggleFavorite}
            style={styles.favoriteButton}
            iconColor={isFavorite ? theme.colors.error : 'white'}
          />
        </ImageBackground>
      </View>

      <Surface style={styles.contentCard} elevation={0}>
        <View style={styles.section}>
          <Title style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            Ingredients
          </Title>
          <Divider style={[styles.divider, { backgroundColor: theme.colors.primary }]} />
          {recipe.ingredients.map((ingredient, index) => (
            <View key={index} style={styles.ingredientItem}>
              <MaterialCommunityIcons 
                name="check-circle-outline" 
                size={24} 
                color={theme.colors.primary} 
              />
              <Text style={styles.ingredientText}>{ingredient}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Title style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            Instructions
          </Title>
          <Divider style={[styles.divider, { backgroundColor: theme.colors.primary }]} />
          {recipe.instructions.map((instruction, index) => (
            <View key={index} style={styles.instructionItem}>
              <Surface style={[styles.instructionNumber, { backgroundColor: theme.colors.primary }]}>
                <Text style={styles.instructionNumberText}>{index + 1}</Text>
              </Surface>
              <Text style={styles.instructionText}>{instruction}</Text>
            </View>
          ))}
        </View>

        {recipe.tips && (
          <View style={styles.section}>
            <Title style={[styles.sectionTitle, { color: theme.colors.primary }]}>
              Tips
            </Title>
            <Divider style={[styles.divider, { backgroundColor: theme.colors.primary }]} />
            <Card style={[styles.tipsCard, { backgroundColor: theme.colors.secondary + '20' }]}>
              <Card.Content>
                <View style={styles.tipContent}>
                  <MaterialCommunityIcons 
                    name="lightbulb-outline" 
                    size={24} 
                    color={theme.colors.secondary} 
                  />
                  <Text style={[styles.tipsText, { color: theme.colors.text }]}>
                    {recipe.tips}
                  </Text>
                </View>
              </Card.Content>
            </Card>
          </View>
        )}
      </Surface>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageDarkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    elevation: 0,
  },
  imageContent: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  imageTitle: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  chipContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  chip: {
    marginRight: 8,
  },
  favoriteButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  contentCard: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24,
    padding: 24,
    backgroundColor: 'white',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  divider: {
    height: 2,
    marginBottom: 16,
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  ingredientText: {
    fontSize: 16,
    marginLeft: 12,
  },
  instructionItem: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  instructionNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  instructionNumberText: {
    color: 'white',
    fontWeight: 'bold',
  },
  instructionText: {
    fontSize: 16,
    flex: 1,
    lineHeight: 24,
  },
  tipsCard: {
    borderRadius: 16,
    marginHorizontal: 8,
  },
  tipContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  tipsText: {
    fontSize: 16,
    fontStyle: 'italic',
    marginLeft: 12,
    flex: 1,
    lineHeight: 24,
  },
});

export default RecipeDetailScreen;
