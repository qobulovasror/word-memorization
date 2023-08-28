import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

import { defaultStyle } from "../../assets/styles/defaultStyle";
import Repeatiton from "./learn/repeatiton";
import Learn from './learn/learning'

export default function TodaysWordStudy() {
  const [mode, setMode] = useState("learn");
  const switchHandler = (mode) => {
    setMode(mode);
  };
  const selectedStyle = { backgroundColor: "#ccc", borderColor: "#fff" };

  return (
    <View style={defaultStyle.container}>
      <View
        style={[defaultStyle.row, defaultStyle.around, defaultStyle.switchMode]}
      >
        <TouchableOpacity
          style={[defaultStyle.switchBtn, mode == "learn" ? selectedStyle : ""]}
          onPress={() => switchHandler("learn")}
        >
          <Text>Bugungi so'zni o'rganish</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            defaultStyle.switchBtn,
            mode == "repeat" ? selectedStyle : "",
          ]}
          onPress={() => switchHandler("repeat")}
        >
          <Text>So'zlarni takrorlash</Text>
        </TouchableOpacity>
      </View>
      {mode === "learn" ? 
        <Learn /> : 
        <Repeatiton/>
      }
    </View>
  );
}


