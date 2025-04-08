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
    const isFocused = state.index;
    console.log('isFocused', isFocused);
    console.log('state', state);
    console.log('descriptors', descriptors);
    return (
        <View style={{ height: 36, width: '100%' }}>
            <View style={{ flexDirection: 'row', width: '90%', height: 36, backgroundColor: '#000000', alignSelf: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate(state.routes[0].name)}
                    style={{
                        flex: 1,
                        backgroundColor: isFocused === 0 ? '#0089fd' : '#323644',
                        alignItems: 'center', justifyContent: 'center', height: 36,
                        borderTopLeftRadius: 10, borderBottomLeftRadius: 10,
                        borderWidth: 0.5,
                        borderColor: 'rgba(255, 255, 255, .2980392157)',
                    }}
                >
                    <Text style={{ color: isFocused === 0 ? '#fff' : '#ccc' }}>
                        DAILY      {/* {descriptors[route.key]?.options?.title || route.name} */}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate(state.routes[1].name)}
                    style={{
                        flex: 1,
                        backgroundColor: isFocused === 1 ? '#0089fd' : '#323644',
                        alignItems: 'center', justifyContent: 'center', height: 36,
                        borderTopRightRadius: 10, borderBottomRightRadius: 10,
                        borderWidth: 1,
                        borderColor: 'rgba(255, 255, 255, .2980392157)',
                    }}
                >
                    <Text style={{ color: isFocused === 1 ? '#fff' : '#ccc' }}>
                        MONTHLY
                    </Text>
                </TouchableOpacity>

                {/* {state.routes.map((route, index) => {
                    const isFocused = state.index === index;
                    return (
                        <TouchableOpacity
                            key={route.key}
                            onPress={() => navigation.navigate(route.name)}
                            style={{
                                flex: 1,
                                // padding: 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 36,
                                backgroundColor: isFocused ? '#0089fd' : '#323644',
                                borderTopLeftRadius: isFocused ? 10 : 0,
                                // borderBottomLeftRadius: isFocused ? 10 : 0,
                            }}
                        >
                            <Text style={{ color: isFocused ? '#fff' : '#ccc' }}>
                                {descriptors[route.key]?.options?.title || route.name}
                            </Text>
                        </TouchableOpacity>
                    );
                })} */}
            </View>
        </View>
    );
}

const GlobalStatusTabs = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <Appbar.Header>
                <Appbar.Action icon="menu" />
                <Appbar.Content title="Global Status" titleStyle={{ fontWeight: 'bold', textAlign: 'center' }} />
                <Appbar.Action icon="reload" />
            </Appbar.Header>

            <View style={{ height: 44, backgroundColor: '#3f424c', alignItems: 'center', justifyContent: 'center', marginBottom: 15 }}>
                <Text style={{ fontSize: 15, color: '#ffffff' }}>Global Production Status</Text>
            </View>

            <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
                <Tab.Screen name={ROUTES.DAILY_STATUS} component={GlobalStatusDaily} options={{ title: 'DAILY' }} />
                <Tab.Screen name={ROUTES.MONTHLY_STATUS} component={GlobalStatusMonthly} options={{ title: 'MONTHLY' }} />
            </Tab.Navigator>
        </View>
    );
};

export default GlobalStatusTabs;
