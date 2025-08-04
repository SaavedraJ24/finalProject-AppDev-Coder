import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ShopStackNavigator } from './ShopStackNavigator';
import { CartStackNavigator } from './CartStackNavigator';
import { OrdersStackNavigator } from './OrdersStackNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../global/colors';


const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen name="ShopTab"
        component={ShopStackNavigator}
        options={{
          tabBarIcon: ({focused}) => <Icon name="shopping-outline" size={28} color={focused? colors.light.shadowColor : colors.light.text} />
        }}
      />
      <Tab.Screen name="CartTab"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({focused}) => <Icon name="cart-outline" size={28} color={focused? colors.light.shadowColor : colors.light.text} />
        }}
      />
      <Tab.Screen name="OrdersTab"
        component={OrdersStackNavigator}
        options={{
          tabBarIcon: ({focused}) => <Icon name="format-list-bulleted" size={28} color={focused? colors.light.shadowColor : colors.light.text} />
        }}
      />
    </Tab.Navigator>
  );
}