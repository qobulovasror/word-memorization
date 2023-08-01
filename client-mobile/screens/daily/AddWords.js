import React, { useState } from "react";
import { Text, View, TextInput, ScrollView, Switch } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { defaultStyle } from "../../assets/styles/defaultStyle";
import { addwords, addedList } from "../../assets/styles/addwords";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function AddWords() {
  const [mode, setMode] = useState('add');
  const [list, setList] = useState([]);
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
        <TouchableOpacity style={[defaultStyle.switchBtn, (mode=='addeddList')? selectedStyle: ""]} 
          onPress={()=>switchHandler('addeddList')}>
          <Text>Qo'shilgan so'zlar</Text>
        </TouchableOpacity>
      </View>
      {
        (mode === 'add')?
          <Add 
            list={list} 
            setList={setList}/> :
          <AddeddList/>
      }
    </View>
  );
}

const Add = (props) => {
  const {list, setList} = props;
  const [exampleCount, setExampleCount] = useState(0)
  const [word, setWord] = useState({
    name: "",
    transcription: "",
    translation:"",
    examples: [
      {
        example: '',
        meaning:'',
      },
      {
        example: '',
        meaning:'',
      },
      {
        example: '',
        meaning:'',
      }
    ],
  })
  const addWordHandler = () => {
    if(word && word.name && word.translation){
      setList([...list, {name, transcription, translation, examples}])
      console.log(list);
    }else{
      alert("Kerakli maydonlar to'ldirilmagan")
    }
  }

  const addExample = () => {
    if(exampleCount<1){
      setExampleCount(exampleCount+1)
    }
  }
  const removeExample = () => {
    if(exampleCount>0){
      setExampleCount(exampleCount-1)
    }
  }
  const exampleHandler = (value, target) => {
    if(target == 11){
      setWord({...word, examples: [ {example: word.examples[0].example+value}, word.examples[1], word.examples[2]]})
    }
    else if(target == 12){
      setWord({...word, examples: [ {example: word.examples[0].meaning+value}, word.examples[1], word.examples[2]]})
    }

    else if(target == 21){
      setWord({...word, examples: [ word.examples[0], {example: word.examples[1].example+value}, word.examples[2]]})
    }else if(target == 22){
      setWord({...word, examples: [ word.examples[0], {example: word.examples[1].meaning+value}, word.examples[2]]})
    }
    else if(target == 31){
      setWord({...word, examples: [ word.examples[0], word.examples[1], {example: word.examples[2].example+value}]})
    }else if(target == 32){
      setWord({...word, examples: [ word.examples[0], word.examples[1], {example: word.examples[2].meaning+value}]})
    }
  }
  return (
    <ScrollView style={{position: 'relative'}}>
      <View style={{margin: 10}}>
        <View style={[defaultStyle.row, defaultStyle.between]}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>So'z qo'shish</Text>
          <TouchableOpacity style={addwords.addBtn} onPress={addWordHandler}>
            <Ionicons name="add" size={20} color={'#fff'}/>
          </TouchableOpacity>
        </View>
        <View style={defaultStyle.column}>
          <Text style={{fontSize: 18}}>Inglizcha so'z: </Text>
          <TextInput 
            placeholder="English word"
            style={addwords.input} 
            onChangeText={value=>setWord({...word, name: word.name+value})}
            />
        </View>
        <View style={defaultStyle.column}>
          <Text style={{fontSize: 18}}>Transkripsiya (ixtiyoriy): </Text>
          <TextInput 
            placeholder="Transcription" 
            style={addwords.input} 
            onChangeText={value=>setWord({...word, transcription: word.transcription+value})}/>
        </View>
        <View style={defaultStyle.column}>
          <Text style={{fontSize: 18}}>Tarjimasi: </Text>
          <TextInput 
            placeholder="Translation" 
            style={addwords.input} 
            onChangeText={value=>setWord({...word, translation: word.translation+value})}/>
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
            <TextInput 
              placeholder="Inglizcha matin" 
              style={addwords.input}
              onChangeText={value=>exampleHandler(value, 11)}/>
            <TextInput placeholder="Tarjimasi" style={addwords.input} onChangeText={value=>exampleHandler(value, 12)}/>
          </View>
        </View> : ""
      }
      {
        (exampleCount>1)? 
        <View style={addwords.exampleGroup}>
          <View style={defaultStyle.column}>
            <Text>Namuna 2</Text>
            <TextInput placeholder="Inglizcha matin" style={addwords.input} onChangeText={value=>exampleHandler(value, 21)}/>
            <TextInput placeholder="Tarjimasi" style={addwords.input} onChangeText={value=>exampleHandler(value, 22)}/>
          </View>
        </View> : ""
      }
      {
        (exampleCount>2)? 
        <View style={addwords.exampleGroup}>
          <View style={defaultStyle.column}>
            <Text>Namuna 3</Text>
            <TextInput placeholder="Inglizcha matin" style={addwords.input} onChangeText={value=>exampleHandler(value, 31)}/>
            <TextInput placeholder="Tarjimasi" style={addwords.input} onChangeText={value=>exampleHandler(value, 32)}/>
          </View>
        </View> : ""
      }
      
    </ScrollView>
  )
}

const AddeddList = () => {

  return (
      <View style={{width: '100%', height: '100%', margin: 10}}>
        
      </View>
  )
}