import { Header } from '../components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from '../screens';


const Stack = createNativeStackNavigator();

export const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='MyProfile'
            screenOptions={{
                header: ({ route }) => <Header title="Vibrar con la Luna" subtitle={route.name} />
            }}
        >
            <Stack.Screen name="MyProfile" component={Profile} />
        </Stack.Navigator>
    );
}
