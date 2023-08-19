import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Checkbox from 'expo-checkbox';
import * as Speech from 'expo-speech';

import { defaultStyle } from "../../assets/styles/defaultStyle";
import { learn } from "../../assets/styles/learn";
import { Feather, Ionicons } from "@expo/vector-icons";


export default function TodaysWordStudy() {
  const [mode, setMode] = useState('add');
  const switchHandler = (mode) => {
    setMode(mode)
  }
  const selectedStyle = { backgroundColor: '#ccc', borderColor: "#fff" }

  return (
     <View style={defaultStyle.container}>
      <View style={[defaultStyle.row, defaultStyle.around, defaultStyle.switchMode]}>
        <TouchableOpacity style={[defaultStyle.switchBtn, (mode=='add')? selectedStyle: ""]} 
          onPress={()=>switchHandler('add')}>
          <Text>Bugungi so'zni o'rganish</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[defaultStyle.switchBtn, (mode=='addeddList')? selectedStyle: ""]} 
          onPress={()=>switchHandler('addeddList')}>
          <Text>So'zlarni takrorlash</Text>
        </TouchableOpacity>
      </View>
      {
        (mode === 'add')?
          <Learn/> :
          <Text>b</Text>
      }
    </View>
  );
}



const Learn = () => {
  const [learnMode, setLearnMode] = useState({
    order: true,
    sequence: ['eng', 'uzb'],
    selectMode: true//'select'//[write, select]
  })
  const [isChecked, setChecked] = useState(false);
  const [mode, setMode] = useState(false);
  const setOrder = () => {
    setLearnMode({...learnMode, order: !learnMode.order})
  }
  const swapSequence = () => {
    setLearnMode({...learnMode, sequence: learnMode.sequence.reverse()})
  }
  const setSelectMode = () => {
    setLearnMode({...learnMode, selectMode: !learnMode.selectMode})
  }
  const startLearn = () => {
    setMode(false)
  }
  const speak = () => {
    const thingToSay = 'nine';
    Speech.speak(thingToSay);
  };
  useEffect(()=>{
    // setMode(true)
  }, [])
  return (
      <View style={{width: '100%', height: '100%', margin: 10}}>
        {
          mode && 
          <View style={learn.learnMode}>
            <Text style={[defaultStyle.tCenter, {fontSize: 20}]}>Sozlanmalari</Text>
            <Text style={learn.settingTitle}>So'zlar ketma-ketlik</Text>
            <View style={[defaultStyle.row, defaultStyle.around, {marginStart: 40}]}>
              <View style={defaultStyle.row}>
                <Checkbox
                  style={learn.checkbox}
                  value={learnMode.order}
                  onValueChange={setOrder}
                  color={isChecked ? '#4630EB' : undefined}
                />
                <Text style={{fontSize: 18, margin: 8, marginStart: 0}}>Tartibli</Text>
              </View>
              <View style={defaultStyle.row}>
                <Checkbox
                  style={learn.checkbox}
                  value={!learnMode.order}
                  onValueChange={setOrder}
                  // onValueChange={setChecked}
                  color={isChecked ? '#4630EB' : undefined}
                />
                <Text style={{fontSize: 18, margin: 8, marginStart: 0}}>Aralash</Text>
              </View>
            </View>
            <Text style={learn.settingTitle}>So'zni topish</Text>
            <View style={[defaultStyle.row, {marginStart: 40}]}>
              <View style={defaultStyle.column}>
                <Text style={{fontSize: 18, margin: 8, marginStart: 0}}>Chiqadigan</Text>
                <Text style={learn.selectSequence}>{learnMode.sequence[0]}</Text>
              </View>
              <TouchableOpacity style={learn.swapBtn} onPress={swapSequence}>
                <Ionicons name="swap-horizontal" color={"#00f"} size={30}/>
              </TouchableOpacity>
              <View style={defaultStyle.column}>
                <Text style={{fontSize: 18, margin: 8, marginStart: 0}}>Topish kerak</Text>
                <Text style={learn.selectSequence}>{learnMode.sequence[1]}</Text>
              </View>
            </View>
            <Text style={learn.settingTitle}>So'zlar topish usuli</Text>
            <View style={[defaultStyle.row, defaultStyle.around, {marginStart: 40}]}>
              <View style={defaultStyle.row}>
                <Checkbox
                  style={learn.checkbox}
                  value={learnMode.selectMode}
                  onValueChange={setSelectMode}
                  color={isChecked ? '#4630EB' : undefined}
                />
                <Text style={{fontSize: 18, margin: 8, marginStart: 0}}>Yozish</Text>
              </View>
              <View style={defaultStyle.row}>
                <Checkbox
                  style={learn.checkbox}
                  value={!learnMode.selectMode}
                  onValueChange={setSelectMode}
                  color={isChecked ? '#4630EB' : undefined}
                />
                <Text style={{fontSize: 18, margin: 8, marginStart: 0}}>Tanlash</Text>
              </View>
            </View>
            <TouchableOpacity style={learn.startBtn} onPress={startLearn}>
              <Text style={[defaultStyle.tCenter, {fontSize: 17, color: '#fff'}]}>Boshlash</Text>
            </TouchableOpacity>
          </View>
        }
        <View style={[learn.disWord, defaultStyle.column]}>
          <TouchableOpacity style={learn.moreBtn}>
            <Feather name="more-horizontal" size={25} color={"#000"} />
          </TouchableOpacity>
          <Text style={learn.learnMainText}>Nine</Text>
          <Text style={learn.learnTransText}>[nain]</Text>
          <TouchableOpacity style={learn.textSpeech} onPress={speak}>
            <Feather name="volume-2" size={25} color={"#000"} />
          </TouchableOpacity>

        </View>
      </View>
  )
}