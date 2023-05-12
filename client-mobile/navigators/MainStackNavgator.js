import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SecundaryScreen from "../screens/SecundaryScreen";
import MainScreen from "../screens/MainScreen";

const MainStack = createNativeStackNavigator();

export default function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="MainStack" component={MainScreen} />
      <MainStack.Screen
        name="Secundry"
        component={SecundaryScreen}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
    </MainStack.Navigator>
  );
}

const config = {
  animation: "timing ",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
