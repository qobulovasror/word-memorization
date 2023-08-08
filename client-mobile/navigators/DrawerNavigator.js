import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SecundaryScreen from "../screens/SecundaryScreen";
import MainScreen from "../screens/MainScreen";
import AddWords from "../screens/daily/AddWords";
import TodaysWordStudy from "../screens/daily/TodaysWordStudy";

import Nums from "../screens/additional/Nums";
import Translate from "../screens/additional/Translate";
import Abc from "../screens/additional/Abc";
import IrregularVerbs from "../screens/additional/IrregularVerbs";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Asosiy oyna" component={MainScreen} />
      <Drawer.Screen name="So'z qo'shish" component={AddWords} />
      <Drawer.Screen name="Bugungi so'zlarni o'rganish" component={TodaysWordStudy} />
      <Drawer.Screen name="Translate" component={Translate} />
      <Drawer.Screen name="Noto'g'ri fe'llar" component={IrregularVerbs} />
      <Drawer.Screen name="Alifbo" component={Abc} />
      <Drawer.Screen name="Raqamlar" component={Nums} />
      <Drawer.Screen name="Secundry" component={SecundaryScreen} />
    </Drawer.Navigator>
  );
}
