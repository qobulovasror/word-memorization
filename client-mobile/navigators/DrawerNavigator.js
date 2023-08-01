import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SecundaryScreen from "../screens/SecundaryScreen";
import MainScreen from "../screens/MainScreen";
import AddWords from "../screens/daily/AddWords";
import TodaysWordStudy from "../screens/daily/TodaysWordStudy";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Asosiy oyna" component={MainScreen} />
      <Drawer.Screen name="So'z qo'shish" component={AddWords} />
      <Drawer.Screen name="Bugungi so'zlarni o'rganish" component={TodaysWordStudy} />
      <Drawer.Screen name="Secundry" component={SecundaryScreen} />
    </Drawer.Navigator>
  );
}
