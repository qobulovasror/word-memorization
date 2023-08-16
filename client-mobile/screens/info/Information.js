import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { info } from "../../assets/styles/info";
import { defaultStyle } from "../../assets/styles/defaultStyle";
import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Linking } from 'react-native';

const Information = () => {
  return (
    <ScrollView>
      <Image
        style={{ width: "100%", height: 200 }}
        source={require("../../assets/img/about.jpeg")}
      />
      <View style={info.main}>
        <Text style={info.textHeader}>Dastur haqida ma'lumot</Text>
        <Text style={info.text}>
          Bu dastur ingliz tilini o‘rganuvchilar uchun. Dastur sizga
          yangi so‘zlarni yodlashda ko‘maklashadi. Har kunlik yodlash kerak
          bo‘lgan so‘zlani kiritasiz. Test mashg‘ulotlarini bajarish orqali
          so‘zlarni yod olasiz. Dastur sizning takrorlash kerak bo‘lgan
          so‘zlaringiz va yod olingan so‘zlarni o‘zida saqlaydi va ishlatishga
          yordam beradi.
        </Text>
        <Text style={info.textHeader}>Rivojlanish uchun</Text>
        <Text style={info.text}>
          Agar dasturdan xato-kamchilik topsangiz yoki
          takliflaringiz-fikrlarigiz bo‘sa ʼFikr-mulohazalarʼ bo‘limidan
          yuborishingiz mumkin.
        </Text>
        <Text style={info.textHeader}>Dastur muallifi haqida</Text>
        <Text style={info.text}>Dasturchi: Qobulov Asror</Text>
        <Text style={info.textHeader}>Bog'lanish</Text>
        <View style={[info.btnGroup, defaultStyle.row, defaultStyle.around]}>
            <TouchableOpacity style={info.contactBtn} onPress={() => Linking.openURL('https://t.me/Qobulov_Asror')}>
                <FontAwesome name="telegram" size={30} color={"#2297F0FF"}/>
            </TouchableOpacity>
            <TouchableOpacity style={info.contactBtn} onPress={() => Linking.openURL('mailto:qobulovasror0@gmail.com')}>
                <MaterialCommunityIcons name="email" size={30} color={"#b00"}/>
            </TouchableOpacity>
            <TouchableOpacity style={info.contactBtn} onPress={() => Linking.openURL('https://github.com/qobulovasror')}>
                <MaterialCommunityIcons name="github" size={30} color={"#000"}/>
            </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Information;
