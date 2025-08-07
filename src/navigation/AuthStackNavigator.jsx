import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Signup } from '../screens'

const Stack = createNativeStackNavigator();


export const AuthStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    );
}