import LoginScreen from '../screens/LoginScreen';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
    Login: undefined;
    Details: { itemId: number; otherParam?: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="Login"
                component={LoginScreen}
            // options={{ title: 'Trang đăng nhập' }}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;
