// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  // Example average prices for different cuisines and courses
  const averagePrices = {
    FrenchCuisine: {
      appetizer: 'R100',
      mainCourse: 'R200',
      dessert: 'R40',
    },
    JapaneseCuisine: {
      appetizer: 'R75',
      mainCourse: 'R88',
      dessert: 'R49',
    },
    ItalianCuisine: {
      appetizer: 'R90',
      mainCourse: 'R110',
      dessert: 'R80',
    },
    DailySpecials: {
      appetizer: 'R90',
      mainCourse: 'R140',
      dessert: 'R75',
    },
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef Christoffel's Menu</Text>
      <View style={styles.buttonContainer}>
        <Button title="French Cuisine" onPress={() => navigation.navigate('FrenchCuisine')} />
        <Text style={styles.priceText}>
          Avg Prices: {averagePrices.FrenchCuisine.appetizer} (Appetizer), {averagePrices.FrenchCuisine.mainCourse} (Main Course), {averagePrices.FrenchCuisine.dessert} (Dessert)
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Japanese Cuisine" onPress={() => navigation.navigate('JapaneseCuisine')} />
        <Text style={styles.priceText}>
          Avg Prices: {averagePrices.JapaneseCuisine.appetizer} (Appetizer), {averagePrices.JapaneseCuisine.mainCourse} (Main Course), {averagePrices.JapaneseCuisine.dessert} (Dessert)
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Italian Cuisine" onPress={() => navigation.navigate('ItalianCuisine')} />
        <Text style={styles.priceText}>
          Avg Prices: {averagePrices.ItalianCuisine.appetizer} (Appetizer), {averagePrices.ItalianCuisine.mainCourse} (Main Course), {averagePrices.ItalianCuisine.dessert} (Dessert)
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Daily Specials" onPress={() => navigation.navigate('NormalMenu')} />
        <Text style={styles.priceText}>
          Avg Prices: {averagePrices.DailySpecials.appetizer} (Appetizer), {averagePrices.DailySpecials.mainCourse} (Main Course), {averagePrices.DailySpecials.dessert} (Dessert)
        </Text>
      </View>
      <View style={styles.container}>
  <Button title="Filter Menu" onPress={() => navigation.navigate('FilterMenu')} />
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 5, // 5mm space between buttons
  },
  priceText: {
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
});

export default HomeScreen;