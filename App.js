import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import CartScreen from './src/screens/CartScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    <Stack.Screen name="Cart" component={CartScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeStack">
        <Drawer.Screen name="HomeStack" component={HomeStack} options={{ title: 'Home' }} />
        <Drawer.Screen name="Cart" component={CartScreen} />
        <Drawer.Screen name="Locations" component={HomeStack} />
        <Drawer.Screen name="Our Story" component={HomeStack} />
        <Drawer.Screen name="Jewelery" component={HomeStack} />
        <Drawer.Screen name="Clothing" component={HomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
