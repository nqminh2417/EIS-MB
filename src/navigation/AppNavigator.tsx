import GlobalStatusTabs from '../screens/ProductionStatus/GlobalStatusTabs';
import LoginScreen from '../screens/Auth/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { ROUTES } from './routes';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={ROUTES.LOGIN} screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name={ROUTES.LOGIN}
                    component={LoginScreen}
                // options={{ title: 'Trang đăng nhập' }}
                />
                <Stack.Screen name={ROUTES.GLOBAL_STATUS_TABS} component={GlobalStatusTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
