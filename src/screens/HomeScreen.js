import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ProductList from '../components/ProductList';
import { getCartItems, storeCartItems } from '../utils/storage';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };

    const loadCartItems = async () => {
      const items = await getCartItems();
      if (items) {
        setCartItems(items);
      }
    };

    fetchProducts();
    loadCartItems();
  }, []);

  const addToCart = async (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    await storeCartItems(updatedCart);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <TouchableOpacity>
          <Image source={require('../../assets/Menu.png')} style={styles.icon} />
        </TouchableOpacity> */}
        <Image source={require('../../assets/Logo.png')} style={styles.logo} />
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Image source={require('../../assets/Search.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image source={require('../../assets/shoppingBag.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.title}>Our Story</Text>
        <View style={styles.subHeaderIcons}>
          <TouchableOpacity>
            <Image source={require('../../assets/Listview.png')} style={styles.smallIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/Filter.png')} style={styles.smallIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <ProductList
        products={products}
        addToCart={addToCart}
        onProductPress={(product) => navigation.navigate('ProductDetail', { product })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'centre',
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeaderIcons: {
    flexDirection: 'row',
  },
  smallIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 10,
  },
});

export default HomeScreen;
