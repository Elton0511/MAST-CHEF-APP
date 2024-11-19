import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const OrderScreen: React.FC<{ route: any; navigation: any }> = ({ route, navigation }) => {
  const [order, setOrder] = useState(route.params.order || []);

  const addItem = (dish: { name: string; price: number }) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find((item) => item.name === dish.name);
      if (existingItem) {
        return prevOrder.map((item) =>
          item.name === dish.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevOrder, { ...dish, quantity: 1 }];
    });
  };

  const removeItem = (dishName: string) => {
    setOrder((prevOrder) =>
      prevOrder
        .map((item) =>
          item.name === dishName ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const calculateTotal = () =>
    order.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Order</Text>
      <FlatList
        data={order}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>
              {item.name} - R{item.price.toFixed(2)} x {item.quantity}
            </Text>
            <View style={styles.buttonRow}>
              <Button title="+" onPress={() => addItem(item)} />
              <Button title="-" onPress={() => removeItem(item.name)} />
            </View>
          </View>
        )}
      />
      <Text style={styles.totalText}>Total: R{calculateTotal().toFixed(2)}</Text>
      <Button title="Place Order" onPress={() => alert('Order placed!')} />
      <Button title="Back to Menu" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default OrderScreen;

