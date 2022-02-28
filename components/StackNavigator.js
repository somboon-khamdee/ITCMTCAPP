// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import ServiceScreen from './ServiceScreen'
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerShown: false
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const ServiceStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Service" component={ServiceScreen} />
    </Stack.Navigator>
  );
}

const AboutStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, AboutStackNavigator, ContactStackNavigator };