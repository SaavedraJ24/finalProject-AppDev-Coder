import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Categories, ProductsByCategory, ProductDetail } from '../screens';
import { Header } from '../components';

const Stack = createNativeStackNavigator();

export const ShopStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Categories'
            screenOptions={{
                header: ({route}) => <Header title='Vibrar con la Luna' subtitle={route.name}/>
            }}>
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Products" component={ProductsByCategory} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
    );
}
