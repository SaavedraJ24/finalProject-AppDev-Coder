import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { MainNavigator } from './src/navigation/MainNavigator';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [loaded, error] = useFonts({
    'Pacifico-Regular': require('./assets/Fonts/Pacifico-Regular.ttf'),
    'DeliusSwashCaps-Regular': require('./assets/Fonts/DeliusSwashCaps-Regular.ttf'),
    'Kalam-Bold': require('./assets/Fonts/Kalam-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <MainNavigator />
      </View>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAFA",
  },
});