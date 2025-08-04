import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../components"
import { Orders } from "../screens";

const Stack = createNativeStackNavigator();

export const OrdersStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="My Orders"
            screenOptions={{
                header: ({ route }) => <Header title="Vibrar con la Luna" subtitle={route.name} />
            }}
        >
            <Stack.Screen name="My Orders" component={Orders} />
        </Stack.Navigator>
    )
}