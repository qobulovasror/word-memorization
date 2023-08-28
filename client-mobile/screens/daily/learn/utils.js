import { Text, View, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";

import { defaultStyle } from "../../../assets/styles/defaultStyle";
import { learn } from "../../../assets/styles/learn";
import { Ionicons } from "@expo/vector-icons";

const SettingMode = (props) => {
  const { learnMode, setOrder, swapSequence, setSelectMode, startLearn } =
    props;
  return (
    <View style={learn.learnMode}>
      <Text style={[defaultStyle.tCenter, { fontSize: 20, fontWeight: "700" }]}>
        Sozlanmalari
      </Text>
      <Text style={learn.settingTitle}>So'zlar ketma-ketlik</Text>
      <View
        style={[defaultStyle.row, defaultStyle.around, { marginStart: 40 }]}
      >
        <View style={defaultStyle.row}>
          <Checkbox
            style={learn.checkbox}
            value={learnMode.order}
            onValueChange={setOrder}
            color={learnMode.order ? "#4630EB" : undefined}
          />
          <Text style={{ fontSize: 18, margin: 8, marginStart: 0 }}>
            Tartibli
          </Text>
        </View>
        <View style={defaultStyle.row}>
          <Checkbox
            style={learn.checkbox}
            value={!learnMode.order}
            onValueChange={setOrder}
            color={!learnMode.order ? "#4630EB" : undefined}
          />
          <Text style={{ fontSize: 18, margin: 8, marginStart: 0 }}>
            Aralash
          </Text>
        </View>
      </View>
      <Text style={learn.settingTitle}>So'zni topish</Text>
      <View style={[defaultStyle.row, { marginStart: 40 }]}>
        <View style={defaultStyle.column}>
          <Text style={{ fontSize: 18, margin: 8, marginStart: 0 }}>
            Chiqadigan
          </Text>
          <Text style={learn.selectSequence}>{learnMode.sequence[0]}</Text>
        </View>
        <TouchableOpacity style={learn.swapBtn} onPress={swapSequence}>
          <Ionicons name="swap-horizontal" color={"#00f"} size={30} />
        </TouchableOpacity>
        <View style={defaultStyle.column}>
          <Text style={{ fontSize: 18, margin: 8, marginStart: 0 }}>
            Topish kerak
          </Text>
          <Text style={learn.selectSequence}>{learnMode.sequence[1]}</Text>
        </View>
      </View>
      <Text style={learn.settingTitle}>So'zlar topish usuli</Text>
      <View
        style={[defaultStyle.row, defaultStyle.around, { marginStart: 40 }]}
      >
        <View style={defaultStyle.row}>
          <Checkbox
            style={learn.checkbox}
            value={learnMode.selectMode}
            onValueChange={setSelectMode}
            color={learnMode.selectMode ? "#4630EB" : undefined}
          />
          <Text style={{ fontSize: 18, margin: 8, marginStart: 0 }}>
            Yozish
          </Text>
        </View>
        <View style={defaultStyle.row}>
          <Checkbox
            style={learn.checkbox}
            value={!learnMode.selectMode}
            onValueChange={setSelectMode}
            color={!learnMode.selectMode ? "#4630EB" : undefined}
          />
          <Text style={{ fontSize: 18, margin: 8, marginStart: 0 }}>
            Tanlash
          </Text>
        </View>
      </View>
      <TouchableOpacity style={learn.startBtn} onPress={startLearn}>
        <Text style={[defaultStyle.tCenter, { fontSize: 17, color: "#fff" }]}>
          Boshlash
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const randomizeData = (defaultArr) => {
    let data = defaultArr.slice();
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
    return data;
  }

export {
    SettingMode,
    randomizeData,
}