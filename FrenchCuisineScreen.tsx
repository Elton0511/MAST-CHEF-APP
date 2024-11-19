// screens/FrenchCuisineScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const FrenchCuisineScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [order, setOrder] = useState([]);

  const dishes = [
    { name: 'Coq au Vin', price: 150, details: 'Chicken, red wine, mushrooms, onions, bacon, garlic.' },
    { name: 'Ratatouille', price: 120, details: 'Eggplant, zucchini, bell peppers, tomatoes, onions, herbs.' },
    { name: 'Bouillabaisse', price: 200, details: 'Fish, shellfish, tomatoes, garlic, saffron, herbs.' },
    { name: 'Crème Brûlée', price: 80, details: 'Cream, sugar, egg yolks, vanilla.' },
  ];

  const handleOrder = (dish: { name: string; price: number; details: string }) => {
    // Add dish to the order array
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find((item) => item.name === dish.name);
      if (existingItem) {
        // Increase quantity if item already exists
        return prevOrder.map((item) =>
          item.name === dish.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Add new item with quantity 1
      return [...prevOrder, { ...dish, quantity: 1 }];
    });

    // Navigate to OrderScreen and pass the updated order
    navigation.navigate('OrderScreen', { order });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>French Cuisine</Text>
      <View style={styles.buttonContainer}>
        {dishes.map((dish) => (
          <View key={dish.name} style={styles.dishContainer}>
            <Button title={`Order ${dish.name}`} onPress={() => handleOrder(dish)} />
            <Text style={styles.dishDetails}>Ingredients: {dish.details}</Text>
            <Text style={styles.price}>Price: R{dish.price.toFixed(2)}</Text>
          </View>
        ))}
      </View>
      <View style={styles.backButtonContainer}>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
  },
  dishContainer: {
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  dishDetails: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 14,
    color: 'gray',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  backButtonContainer: {
    marginTop: 20,
  },
});

export default FrenchCuisineScreen;

