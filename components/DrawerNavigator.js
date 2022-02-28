import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { MainStackNavigator, ServiceStackNavigator, AboutStackNavigator, ContactStackNavigator } from "./StackNavigator";
import HomeScreen from './HomeScreen';
import ServiceScreen from './ServiceScreen'
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import TabNavigator from "./BottomTabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Service" component={ServiceScreen} />
      <Drawer.Screen name="About" component={AboutStackNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;