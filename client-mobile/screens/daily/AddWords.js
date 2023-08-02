import React, { useEffect, useState } from "react";
import { Text, View, TextInput, ScrollView, FlatList, Modal, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { defaultStyle } from "../../assets/styles/defaultStyle";
import { addwords, addedList } from "../../assets/styles/addwords";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function AddWords() {
  const [modalVisible, setModalVisible] = useState(false);
  const [mode, setMode] = useState('add');
  const [list, setList] = useState([]);
  const switchHandler = (mode) => {
    setMode(mode)
  }
  const selectedStyle = { backgroundColor: '#ccc', borderColor: "#fff" }
  return (
    <View style={defaultStyle.container}>
      {
        (modalVisible) &&
        <View style={defaultStyle.modalBack}>
          <TouchableOpacity style={{width: '100%', height: '100%'}} onPress={()=>setModalVisible(!modalVisible)}/>
        </View>
      }
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
          <AddeddList 
            list={list} 
            setList={setList}
            modalVisible={modalVisible} 
            setModalVisible={setModalVisible}/>
      }
    </View>
  );
}

const Add = (props) => {
  const {list, setList, edit} = props;
  const [exampleCount, setExampleCount] = useState(0)

  const [word, setWord] = useState({
    name: '',
    transcription: "",
    translation:"",
    example: "",
    exampleMeaning: ""
  })
  const addWordHandler = () => {
    if(word && word.name && word.translation){
      setList([...list, {...word, id: Date.now()}])
      setWord({
        name: "",
        transcription: "",
        translation:"",
        example: "",
        exampleMeaning: ""
      })
    }else{
      alert("Kerakli maydonlar to'ldirilmagan")
    }
  }
  const handleChange = (field, value) => {
    setWord((prevData) => ({
      ...prevData,
      [field]: value,
    }));
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
  useEffect(()=>{
    if(edit){
      setWord({
        name: edit.name | '',
        transcription: edit.transcription,
        translation: edit.translation,
        example: edit.example,
        exampleMeaning: edit.exampleMeaning
      })
    }
  }, [])
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
            value={word.name}
            onChangeText={(text) => handleChange('name', text)}
            />
        </View>
        <View style={defaultStyle.column}>
          <Text style={{fontSize: 18}}>Transkripsiya (ixtiyoriy): </Text>
          <TextInput 
            placeholder="Transcription" 
            style={addwords.input} 
            value={word.transcription}
            onChangeText={(text) => handleChange('transcription', text)}/>
        </View>
        <View style={defaultStyle.column}>
          <Text style={{fontSize: 18}}>Tarjimasi: </Text>
          <TextInput 
            placeholder="Translation" 
            style={addwords.input} 
            value={word.translation}
            onChangeText={(text) => handleChange('translation', text)}/>
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
            <Text>Namuna</Text>
            <TextInput 
              placeholder="Inglizcha matin" 
              style={addwords.input}
              value={word.example}
              onChangeText={(text) => handleChange('example', text)}/>
            <TextInput 
              placeholder="Tarjimasi" 
              style={addwords.input} 
              value={word.exampleMeaning}
              onChangeText={(text) => handleChange('exampleMeaning', text)}/>
          </View>
        </View> : ""
      }
      
    </ScrollView>
  )
}

const AddeddList = (props) => {
  const {list, setList, modalVisible, setModalVisible} = props;
  const moreFunHandler = (item) => {
    setModalVisible(true)
  }
  return (
      <View style={addedList.itemGroup}>
        {
          (list.length>0) ? 
          <View>
            { modalVisible &&
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                style={addedList.moreFun}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                }}>
              <MoreFun setModalVisible={setModalVisible}/>
            </Modal>
            }
            <FlatList
              data={list}
              renderItem={({item}) => (
                <View style={[addedList.item, defaultStyle.row, defaultStyle.between]}>
                  <View>
                    <Text style={addedList.itemName}>So'z: {item.name}</Text>
                    <Text style={addedList.itemTranslation}>Tarjimasi: {item.translation}</Text>
                    <Text style={addedList.itemTranscription}>Transkripsiyasi: {item.transcription}</Text>
                    <Text style={addedList.example}>Namuna: {item.example}</Text>
                    <Text style={addedList.exampleMeang}>Namuna tarjimasi: {item.exampleMeaning}</Text>
                  </View>
                  <TouchableOpacity style={addedList.moreBtn} onPress={()=>moreFunHandler(item)}>
                    <Feather name="more-horizontal" size={25} color={"#000"} />
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={item => item.id}
            /> 
          </View>
          :
          <Text style={addedList.defaultMsg}>Ro'yxat bo'sh</Text>
        }
      </View>
  )
}

const MoreFun = (item) => {
  return (
    <View>
      <Text style={[defaultStyle.tCenter, {fontSize: 20}]}>Qo'shimcha: "{item.name}"</Text>
      <TouchableOpacity style={[addedList.moreListBtn, defaultStyle.row]}>
        <Feather name="volume-2" size={25} color={"#000"} />
        <Text style={{fontSize: 18, marginStart: 10}}>Tinglash</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[addedList.moreListBtn, defaultStyle.row]}>
        <Feather name="copy" size={25} color={"#000"} />
        <Text style={{fontSize: 18, marginStart: 10}}>Nusxalash</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[addedList.moreListBtn, defaultStyle.row]}>
        <Feather name="edit" size={25} color={"#000"} />
        <Text style={{fontSize: 18, marginStart: 10}}>O'zgartirish</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[addedList.moreListBtn, defaultStyle.row]}>
        <Feather name="trash" size={25} color={"#000"} />
        <Text style={{fontSize: 18, marginStart: 10}}>O'chirish</Text>
      </TouchableOpacity>
    </View>
  )
}