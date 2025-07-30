import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Header } from './src/components/Header';
import Categories from './src/screens/Categories';
import ProductsByCategory from './src/screens/ProductsByCategory';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [categorySelected, setCategorySelected] = useState(null);
  const [loaded, error] = useFonts({
    'Pacifico-Regular': require('./assets/Fonts/Pacifico-Regular.ttf'),
    'DeliusSwashCaps-Regular': require('./assets/Fonts/DeliusSwashCaps-Regular.ttf'),
  });
  console.log(categorySelected)
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Header title="Vibrar con Luna" />
      {
        categorySelected !== null ?
          <ProductsByCategory category={categorySelected} />
          :
          <Categories setCategoriesSelected={setCategorySelected} />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAFA",
  },
});

/*  NO ANDA EN LA APP   ->  MIRAR CLASE 4*/