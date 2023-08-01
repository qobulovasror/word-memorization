import React, { useEffect, useState } from "react";
import { Text, View, TextInput, ScrollView, Switch } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Checkbox from 'expo-checkbox';

import { defaultStyle } from "../../assets/styles/defaultStyle";
import { addwords, learn } from "../../assets/styles/addwords";
import { Ionicons } from "@expo/vector-icons";

export default function AddWords() {
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
          <Text>So'z qo'shish</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[defaultStyle.switchBtn, (mode=='learn')? selectedStyle: ""]} 
          onPress={()=>switchHandler('learn')}>
          <Text>So'z yodlash</Text>
        </TouchableOpacity>
      </View>
      {
        (mode === 'add')?
          <Add/> :
          <Learn/>
      }
    </View>
  );
}

const Add = () => {
  const [exampleCount, setExampleCount] = useState(0)
  const addExample = () => {
    if(exampleCount<3){
      setExampleCount(exampleCount+1)
    }
  }
  const removeExample = () => {
    if(exampleCount>0){
      setExampleCount(exampleCount-1)
    }
  }
  return (
    <ScrollView style={{position: 'relative'}}>
      <View style={{margin: 10}}>
        <View style={[defaultStyle.row, defaultStyle.between]}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>So'z qo'shish</Text>
          <TouchableOpacity style={addwords.addBtn}>
            <Ionicons name="add" size={20} color={'#fff'}/>
          </TouchableOpacity>
        </View>
        <View style={defaultStyle.column}>
          <Text style={{fontSize: 18}}>Inglizcha so'z: </Text>
          <TextInput placeholder="English word" style={addwords.input} />
        </View>
        <View style={defaultStyle.column}>
          <Text style={{fontSize: 18}}>Transkripsiya (ixtiyoriy): </Text>
          <TextInput placeholder="Transcription" style={addwords.input} />
        </View>
        <View style={defaultStyle.column}>
          <Text style={{fontSize: 18}}>Tarjimasi: </Text>
          <TextInput placeholder="Translation" style={addwords.input} />
        </View>
      </View>
      <View style={[defaultStyle.row, defaultStyle.between]}>
        <TouchableOpacity style={addwords.exampleAddBtn} onPress={addExample}>
          <Text style={addwords.exampleAddBtnText}>Namuna qo'shish</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={removeExample}>
          <Ionicons name="trash-outline" size={20} color={'#f00'}/>
        </TouchableOpacity>
      </View>
      {
        (exampleCount>0)? 
        <View style={addwords.exampleGroup}>
          <View style={defaultStyle.column}>
            <Text>Namuna 1</Text>
            <TextInput placeholder="Inglizcha matin" style={addwords.input}/>
            <TextInput placeholder="Tarjimasi" style={addwords.input}/>
          </View>
        </View> : ""
      }
      {
        (exampleCount>1)? 
        <View style={addwords.exampleGroup}>
          <View style={defaultStyle.column}>
            <Text>Namuna 2</Text>
            <TextInput placeholder="Inglizcha matin" style={addwords.input}/>
            <TextInput placeholder="Tarjimasi" style={addwords.input}/>
          </View>
        </View> : ""
      }
      {
        (exampleCount>2)? 
        <View style={addwords.exampleGroup}>
          <View style={defaultStyle.column}>
            <Text>Namuna 3</Text>
            <TextInput placeholder="Inglizcha matin" style={addwords.input}/>
            <TextInput placeholder="Tarjimasi" style={addwords.input}/>
          </View>
        </View> : ""
      }
      
    </ScrollView>
  )
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
  useEffect(()=>{
    setMode(true)
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
                  // onValueChange={setChecked}
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
      </View>
  )
}