import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { defaultStyle } from "../../../assets/styles/defaultStyle";
import { addwords } from "../../../assets/styles/addwords";
import { Ionicons } from "@expo/vector-icons";
import { saveWord, updateWord } from "../../../services/wordDBService";

const Add = (props) => {
  const { edit, fetchData, setEdit } = props;
  const [exampleCount, setExampleCount] = useState(0);

  const [word, setWord] = useState({
    name: "",
    transcription: "",
    translation: "",
    example: "",
    exampleMeaning: "",
    status: "new",
  });
  const addWordHandler = async () => {
    if (word.name && word.translation) {
      try {
        if (!edit) {
          saveWord(
            word.name,
            word.status,
            (word.transcription)? word.transcription : "",
            word.translation,
            (word.example)? word.example: "",
            (word.exampleMeaning)? word.exampleMeaning : ""
          );
        } else {
          updateWord(word, word.id)
          setEdit("")
        }
      } catch (error) {
        alert(error);
        console.log("add word", error);
      }
      setWord({
        name: "",
        transcription: "",
        translation: "",
        example: "",
        exampleMeaning: "",
        status: "new",
      });
      fetchData()
    } else {
      alert("Kerakli maydonlar to'ldirilmagan");
    }
  };
  const handleChange = (field, value) => {
    setWord((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const addExample = () => {
    if (exampleCount < 1) {
      setExampleCount(exampleCount + 1);
    }
  };
  const removeExample = () => {
    if (exampleCount > 0) {
      setExampleCount(exampleCount - 1);
    }
  };
  useEffect(() => {
    if (edit) {
      setWord({
        id: edit.id,
        name: edit.name,
        transcription: edit.transcription,
        translation: edit.translation,
        example: edit.example,
        exampleMeaning: edit.exampleMeaning,
        status: edit.status,
      });
      setExampleCount(1);
    }
  }, [edit]);
  return (
    <ScrollView style={{ position: "relative" }}>
      <View style={{ margin: 10 }}>
        <View style={[defaultStyle.row, defaultStyle.between]}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            So'z qo'shish
          </Text>
          <TouchableOpacity style={addwords.addBtn} onPress={addWordHandler}>
            <Ionicons name="add" size={20} color={"#fff"} />
          </TouchableOpacity>
        </View>
        <View style={defaultStyle.column}>
          <Text style={{ fontSize: 18 }}>Inglizcha so'z: </Text>
          <TextInput
            placeholder="English word"
            style={addwords.input}
            value={word.name}
            onChangeText={(text) => handleChange("name", text)}
          />
        </View>
        <View style={defaultStyle.column}>
          <Text style={{ fontSize: 18 }}>Transkripsiya (ixtiyoriy): </Text>
          <TextInput
            placeholder="Transcription"
            style={addwords.input}
            value={word.transcription}
            onChangeText={(text) => handleChange("transcription", text)}
          />
        </View>
        <View style={defaultStyle.column}>
          <Text style={{ fontSize: 18 }}>Tarjimasi: </Text>
          <TextInput
            placeholder="Translation"
            style={addwords.input}
            value={word.translation}
            onChangeText={(text) => handleChange("translation", text)}
          />
        </View>
      </View>
      <View style={[defaultStyle.row, defaultStyle.between]}>
        <TouchableOpacity style={addwords.exampleAddBtn} onPress={addExample}>
          <Text style={addwords.exampleAddBtnText}>Namuna qo'shish</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={removeExample}>
          <Ionicons name="trash-outline" size={20} color={"#f00"} />
        </TouchableOpacity>
      </View>
      {exampleCount > 0 ? (
        <View style={addwords.exampleGroup}>
          <View style={defaultStyle.column}>
            <Text>Namuna</Text>
            <TextInput
              placeholder="Inglizcha matin"
              style={addwords.input}
              value={word.example}
              onChangeText={(text) => handleChange("example", text)}
            />
            <TextInput
              placeholder="Tarjimasi"
              style={addwords.input}
              value={word.exampleMeaning}
              onChangeText={(text) => handleChange("exampleMeaning", text)}
            />
          </View>
        </View>
      ) : (
        ""
      )}
    </ScrollView>
  );
};

export default Add;
