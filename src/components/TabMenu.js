import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import ConnectionScreen from '../screens/ConnectionScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabMenu = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-home'
                            : 'ios-home-outline';
                    } else if (route.name === 'Connection') {
                        iconName = focused
                            ? 'ios-person'
                            : 'ios-person-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'salmon',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Home Screen' }} />
            <Tab.Screen
                name="Connection"
                component={ConnectionScreen}
                options={{ title: 'Connection Screen' }}
            />
        </Tab.Navigator>
    )
}

export default TabMenu


