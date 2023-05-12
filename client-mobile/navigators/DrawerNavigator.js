import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SecundaryScreen from "../screens/SecundaryScreen";
import MainScreen from "../screens/MainScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MainStack" component={MainScreen} />
      <Drawer.Screen name="Secundry" component={SecundaryScreen} />
    </Drawer.Navigator>
  );
}
