import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { defaultStyle } from "../../assets/styles/defaultStyle";

import Add from "./addAndList/Add";
import AddeddList from "./addAndList/List";
import { createWordTable, getWords } from "../../services/wordDBService";

export default function AddWords() {
  const [mode, setMode] = useState("add");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState("");
  
  const fetchData = () => {
    getWords()
      .then((data) => {
        setList(data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  const switchHandler = (mode) => {
    setMode(mode);
    if(mode === "addeddList")
      fetchData()
  };

  useEffect(()=>{
    fetchData()
    createWordTable()
  }, [])
  const selectedStyle = { backgroundColor: "#ccc", borderColor: "#fff" };
  return (
    <View style={defaultStyle.container}>
      <View
        style={[defaultStyle.row, defaultStyle.around, defaultStyle.switchMode]}
      >
        <TouchableOpacity
          style={[defaultStyle.switchBtn, mode == "add" ? selectedStyle : ""]}
          onPress={() => switchHandler("add")}
        >
          <Text>Yangi so'z qo'shish</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            defaultStyle.switchBtn,
            mode == "addeddList" ? selectedStyle : "",
          ]}
          onPress={() => switchHandler("addeddList")}
        >
          <Text>Qo'shilgan so'zlar</Text>
        </TouchableOpacity>
      </View>
      {mode === "add" ? (
        <Add fetchData={fetchData} edit={edit} setEdit={setEdit}/>
      ) : (
        <AddeddList
          fetchData={fetchData}
          list={list}
          setMode={setMode}
          setEdit={setEdit}
        />
      )}
    </View>
  );
}
