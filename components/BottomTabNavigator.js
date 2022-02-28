// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { MainStackNavigator, ServiceStackNavigator, AboutStackNavigator, ContactStackNavigator } from "./StackNavigator";
import HomeScreen from './HomeScreen';
import ServiceScreen from './ServiceScreen'
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#FFFFFF',
        activeBackgroundColor: '#009680',
        inactiveBackgroundColor: '#00824a',
        headerShown: false,
        style: {
          backgroundColor: '#CE4418',
            paddingBottom: 3
          }
      }}
    >
      <Tab.Screen name="Home Screen" component={MainStackNavigator}
      options={{
        tabBarLabel:'Home',
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false
          }}
      />
      <Tab.Screen name="ServiceScreen" component={ServiceScreen}
            options={{
        tabBarLabel:'Service',
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="room-service" color={color} size={size} />
          ),
          headerShown: false
          }}
      />
      <Tab.Screen name="AboutScreen" component={AboutStackNavigator}
            options={{
        tabBarLabel:'About Us',
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information" color={color} size={size} />
          ),
          headerShown: false
          }}
      />
      <Tab.Screen name="ContactScreen" component={ContactStackNavigator}
            options={{
        tabBarLabel:'Contact',
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="phone" color={color} size={size} />
          ),
          headerShown: false
          }}
      />

    </Tab.Navigator>
  );
};

export default BottomTabNavigator;