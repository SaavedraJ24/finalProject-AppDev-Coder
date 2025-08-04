import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../components"
import { Cart } from "../screens";

const Stack = createNativeStackNavigator();

export const CartStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="My Cart"
            screenOptions={{
                header: ({ route }) => <Header title="Vibrar con la Luna" subtitle={route.name} />
            }}
        >
            <Stack.Screen name="My Cart" component={Cart} />
        </Stack.Navigator>
    )
}