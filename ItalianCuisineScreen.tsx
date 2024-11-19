// screens/ItalianCuisineScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ItalianCuisineScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [order, setOrder] = useState([]);

  const dishes = [
    { name: 'Spaghetti Carbonara', price: 150, details: 'Spaghetti, Eggs, Parmesan, Bacon, Pepper' },
    { name: 'Margherita Pizza', price: 120, details: 'Pizza Dough, Tomatoes, Mozzarella, Basil' },
    { name: 'Tiramisu', price: 80, details: 'Coffee, Mascarpone, Ladyfingers, Cocoa' },
    { name: 'Osso Buco', price: 200, details: 'Veal Shank, Vegetables, White Wine, Broth' },
  ];

  const handleOrder = (dish: { name: string; price: number; details: string }) => {
    // Add dish to the order array
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find((item) => item.name === dish.name);
      if (existingItem) {
        // Increment quantity if the item already exists
        return prevOrder.map((item) =>
          item.name === dish.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Add a new item with quantity 1
      return [...prevOrder, { ...dish, quantity: 1 }];
    });

    // Navigate to the OrderScreen and pass the updated order
    navigation.navigate('OrderScreen', { order });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Italian Cuisine</Text>
      {dishes.map((dish) => (
        <View key={dish.name} style={styles.dishContainer}>
          <Button title={`Order ${dish.name}`} onPress={() => handleOrder(dish)} />
          <Text style={styles.ingredients}>Ingredients: {dish.details}</Text>
          <Text style={styles.price}>Price: R{dish.price.toFixed(2)}</Text>
        </View>
      ))}
      <View style={styles.buttonContainer}>
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
  dishContainer: {
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  ingredients: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default ItalianCuisineScreen;
