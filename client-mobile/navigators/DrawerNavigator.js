import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainScreen from "../screens/MainScreen";
import AddWords from "../screens/daily/AddWords";
import TodaysWordStudy from "../screens/daily/TodaysWordStudy";

import Nums from "../screens/additional/Nums";
import Translate from "../screens/additional/Translate";
import Abc from "../screens/additional/Abc";
import IrregularVerbs from "../screens/additional/IrregularVerbs";

import Setting from "../screens/info/setting";
import Feedback from "../screens/info/Feedback";
import Information from "../screens/info/Information";
import Memorized from "../screens/daily/memorized";
import GrammerCheck from "../screens/additional/grammerCheck";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({token, setToken}) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Asosiy oyna" component={MainScreen} />
      <Drawer.Screen name="So'z qo'shish" component={AddWords} />
      <Drawer.Screen name="Bugungi so'zlarni o'rganish" component={TodaysWordStudy} />
      <Drawer.Screen name="Yod olingan so'zlar" component={Memorized} />
      <Drawer.Screen name="Translate" component={Translate} />
      <Drawer.Screen name="Gramatik tekshiruv" component={GrammerCheck} />
      <Drawer.Screen name="Noto'g'ri fe'llar" component={IrregularVerbs} />
      <Drawer.Screen name="Alifbo" component={Abc} />
      <Drawer.Screen name="Raqamlar" component={Nums} />
      <Drawer.Screen name="Sozlanmalar">
        {props => <Setting {...props} token={token} setToken={setToken} />}
      </Drawer.Screen>
      <Drawer.Screen name="Fikr-mulohazalar" component={Feedback} />
      <Drawer.Screen name="Dastur haqida ma'lumot" component={Information} />
    </Drawer.Navigator>
  );
}
