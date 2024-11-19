import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, ScrollView } from 'react-native';

const FilterMenuScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const averagePrices = {
    FrenchCuisine: {
      appetizer: { name: 'French Onion Soup', price: 'R100', description: 'A classic French soup topped with melted cheese.' },
      mainCourse: { name: ' French Coq au Vin', price: 'R200', description: 'Chicken braised with wine, lardons, mushrooms, and garlic.' },
      dessert: { name: ' French Crème Brûlée', price: 'R80', description: 'A creamy custard topped with a layer of hard caramel.' },
    },
    JapaneseCuisine: {
      appetizer: { name: 'Japanese Ramen', price: 'R75', description: 'Steamed and salted young soybeans.' },
      mainCourse: { name: 'Japanese Sushi', price: 'R88', description: 'Vinegared rice with various toppings, usually raw fish.' },
      dessert: { name: 'Japanese Mochi', price: 'R49', description: 'Sweet rice cake filled with various fillings.' },
    },
    ItalianCuisine: {
      appetizer: { name: 'Italian Bruschetta', price: 'R90', description: 'Grilled bread topped with tomatoes, garlic, and basil.' },
      mainCourse: { name: 'Italian Lasagna', price: 'R110', description: 'Layers of pasta, meat, cheese, and tomato sauce.' },
      dessert: { name: 'Italian Tiramisu', price: 'R80', description: 'Coffee-flavored dessert made with mascarpone cheese.' },
    },
    DailySpecials: {
      appetizer: { name: 'Stuffed Peppers', price: 'R90', description: 'Peppers stuffed with a mix of rice, meat, and spices.' },
      mainCourse: { name: 'Grilled Salmon', price: 'R140', description: 'Salmon fillet grilled to perfection, served with vegetables.' },
      dessert: { name: 'Cheesecake', price: 'R75', description: 'Creamy cheesecake with a graham cracker crust.' },
    },
  };

  const handleShowCategory = (category: string) => {
    setSelectedCategory(category);
    setModalVisible(true);
  };

  const renderCategoryDetails = () => {
    return (
      <ScrollView>
        {Object.entries(averagePrices).map(([cuisine, prices]) => {
          const item = prices[selectedCategory];
  
          // Handle cases where selectedCategory is invalid or not found
          if (!item) {
            return (
              <View key={cuisine} style={styles.itemContainer}>
                <Text style={styles.descriptionText}>No details available for this category.</Text>
              </View>
            );
          }
  
          return (
            <View key={cuisine} style={styles.itemContainer}>
              <Text style={styles.itemTitle}>{item.name}</Text>
              <Text style={styles.priceText}>Price: {item.price}</Text>
              <Text style={styles.descriptionText}>{item.description}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  };
  return (
    <View style={styles.container}>
      <Button title="Show Starters" onPress={() => handleShowCategory('appetizer')} style={styles.button} />
      <Button title="Show Main Courses" onPress={() => handleShowCategory('mainCourse')} style={styles.button} />
      <Button title="Show Desserts" onPress={() => handleShowCategory('dessert')} style={styles.button} />
      <Button title="Back to Menu" onPress={() => navigation.navigate('Home')} style={styles.button} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
            </Text>
            {renderCategoryDetails()}
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 16,
    color: '#666',
  },
  descriptionText: {
    fontSize: 14,
    color: '#888',
  },
  button: {
    marginVertical: 14, // 5mm distance (approximately 14px)
  },
});

export default FilterMenuScreen;
