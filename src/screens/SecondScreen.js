import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet,StatusBar } from 'react-native';
import Constants from 'expo-constants';

const favoriteFoods = [
  {
    id: 1,
    name: 'Pizza',
    description: 'Deliciosa pizza con queso derretido, pepperoni y champiñones.',
    image: require('../img/pizza.png'),
  },
  {
    id: 2,
    name: 'Sushi',
    description: 'Rollos de sushi fresco con arroz, pescado crudo y aguacate.',
    image: require('../img/sushi.png'),
  },
  {
    id: 3,
    name: 'Hamburguesa',
    description: 'Jugosa hamburguesa con carne a la parrilla, lechuga, tomate y queso cheddar.',
    image: require('../img/burger.png'),
  },
  {
    id: 4,
    name: 'Tacos',
    description: 'Tacos mexicanos con carne asada, cebolla, cilantro y salsa picante.',
    image: require('../img/tacos.png'),
  },
  {
    id: 5,
    name: 'Pasta',
    description: 'Pasta italiana con salsa marinara, albóndigas y queso parmesano rallado.',
    image: require('../img/pasta.png'),
  },
  {
    id: 6,
    name: 'Ensalada César',
    description: 'Ensalada fresca con lechuga romana, pollo a la parrilla, crutones y aderezo César.',
    image: require('../img/cesar.png'),
  },
];
const statusBarHeight = Constants.statusBarHeight || StatusBar.currentHeight || 0;

const FavoriteFoodsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {favoriteFoods.map(food => (
        <View key={food.id} style={styles.foodContainer}>
          <Image source={food.image} style={styles.foodImage} />
          <Text style={styles.foodName}>{food.name}</Text>
          <Text style={styles.foodDescription}>{food.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:statusBarHeight,
    paddingHorizontal:10,
    backgroundColor: '#fff',
  },
  foodContainer: {
    marginBottom: 20,
  },
  foodImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  foodName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  foodDescription: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default FavoriteFoodsScreen;
