/* eslint-disable react-native/no-inline-styles */

import { MaterialTopTabBarProps, createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, TouchableOpacity, View } from 'react-native';

import { Appbar } from 'react-native-paper';
import GlobalStatusDaily from './GlobalStatusDaily';
import GlobalStatusMonthly from './GlobalStatusMonthly';
import { ROUTES } from '../../navigation/routes';
import React from 'react';

const Tab = createMaterialTopTabNavigator();

function CustomTabBar({ state, descriptors, navigation }: MaterialTopTabBarProps) {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#6200ee' }}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;
                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={() => navigation.navigate(route.name)}
                        style={{
                            flex: 1,
                            padding: 15,
                            alignItems: 'center',
                            borderBottomWidth: isFocused ? 2 : 0,
                            borderBottomColor: isFocused ? '#fff' : 'transparent',
                        }}
                    >
                        <Text style={{ color: isFocused ? '#fff' : '#ccc' }}>
                            {descriptors[route.key]?.options?.title || route.name}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const GlobalStatusTabs = () => {
    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header>
                <Appbar.Action icon="menu" />
                <Appbar.Content title="Global Status" titleStyle={{ fontWeight: 'bold', textAlign: 'center' }} />
                <Appbar.Action icon="reload" />
            </Appbar.Header>

            <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
                <Tab.Screen name={ROUTES.DAILY_STATUS} component={GlobalStatusDaily} />
                <Tab.Screen name={ROUTES.MONTHLY_STATUS} component={GlobalStatusMonthly} />
            </Tab.Navigator>
        </View>
    );
};

export default GlobalStatusTabs;
