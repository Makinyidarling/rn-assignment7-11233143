import AsyncStorage from '@react-native-async-storage/async-storage';

const CART_ITEMS = 'CART_ITEMS';

export const storeCartItems = async (items) => {
  try {
    await AsyncStorage.setItem(CART_ITEMS, JSON.stringify(items));
  } catch (e) {
    console.error(e);
  }
};

export const getCartItems = async () => {
  try {
    const items = await AsyncStorage.getItem(CART_ITEMS);
    return items ? JSON.parse(items) : [];
  } catch (e) {
    console.error(e);
  }
};
