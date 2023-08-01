import React from "react";
import { TouchableOpacity, Text, View, ScrollView } from "react-native";
import { AntDesign, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { mainStyle } from "../assets/styles/main";
import {defaultStyle} from '../assets/styles/defaultStyle'

export default function MainScreen({ navigation }) {
  return (
    <View style={defaultStyle.container}>
      <ScrollView style={defaultStyle.column}>
        <View style={[defaultStyle.column, {marginBottom: 2}]}>
          <Text style={{fontSize: 15}}>Kunlik so'z o'rganish</Text>
          <View style={[defaultStyle.column, mainStyle.itemGroup]}>
            <TouchableOpacity style={[defaultStyle.row, mainStyle.item]} 
              onPress={()=>navigation.navigate("So'z qo'shish va o'rganish")}>
              <AntDesign name="pluscircleo" size={25} color={"#0f0"} />
              <Text style={{marginStart: 10, fontSize: 20}}>Yangi so'z qo'shish va o'rganish</Text>
            </TouchableOpacity>
            <View style={mainStyle.hr}></View>
            <TouchableOpacity style={[defaultStyle.row, mainStyle.item]}>
              <Feather name="refresh-ccw" size={25} color={"#00f"} />
              <Text style={{marginStart: 10, fontSize: 20}}>Bugungi so'zlarni takrorlash</Text>
            </TouchableOpacity>
            <View style={mainStyle.hr}></View>
            <TouchableOpacity style={[defaultStyle.row, mainStyle.item]}>
              <MaterialCommunityIcons name="repeat-variant" size={28} color={"#B0B900"} />
              <Text style={{marginStart: 10, fontSize: 20}}>Barcha so'zlarni takrorlash</Text>
            </TouchableOpacity>
            <View style={mainStyle.hr}></View>
            <TouchableOpacity style={[defaultStyle.row, mainStyle.item]}>
              <MaterialCommunityIcons name="list-status" size={28} color={"#EB4C42"} />
              <Text style={{marginStart: 10, fontSize: 20}}>Test</Text>
            </TouchableOpacity>
            <View style={mainStyle.hr}></View>
            <TouchableOpacity style={[defaultStyle.row, mainStyle.item]}>
              <Feather name="bookmark" size={25} color={"#50C878"} />
              <Text style={{marginStart: 10, fontSize: 20}}>Yod olingan so'zlar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[defaultStyle.column, {marginBottom: 2}]}>
          <Text style={{fontSize: 15}}>Qo'shimcha (maxsus) o'rganish</Text>
          <View style={[defaultStyle.column, mainStyle.itemGroup]}>
            <TouchableOpacity style={[defaultStyle.row, mainStyle.item]}>
              <Ionicons name="pencil-outline" size={25} color={"#0f0"} />
              <Text style={{marginStart: 10, fontSize: 20}}>Toifa tanlash</Text>
            </TouchableOpacity>
            <View style={mainStyle.hr}></View>
            <TouchableOpacity style={[defaultStyle.row, mainStyle.item]}>
              <AntDesign name="pluscircleo" size={25} color={"#0f0"} />
              <Text style={{marginStart: 10, fontSize: 20}}>Toifa bo'yicha so'z o'rganish</Text>
            </TouchableOpacity>
            <View style={mainStyle.hr}></View>
            <TouchableOpacity style={[defaultStyle.row, mainStyle.item]}>
              <Feather name="refresh-ccw" size={25} color={"#00f"} />
              <Text style={{marginStart: 10, fontSize: 20}}>So'zlarni takrorlash</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[defaultStyle.column, {marginBottom: 2}]}>
          <Text style={{fontSize: 15}}>Qo'shimcha imkoniyatlar</Text>
          <View style={[defaultStyle.column, mainStyle.itemGroup]}>
            <TouchableOpacity style={[defaultStyle.row, mainStyle.item]}>
              <Ionicons name="list" size={25} color={"#B91786"} />
              <Text style={{marginStart: 10, fontSize: 20}}>Noto'g'ri fe'llar</Text>
            </TouchableOpacity>
            <View style={mainStyle.hr}></View>
            <TouchableOpacity style={[defaultStyle.row, mainStyle.item]}>
              <MaterialCommunityIcons name="translate" size={25} color={"#9457EB"} />
              <Text style={{marginStart: 10, fontSize: 20}}>Tarjima qilish</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[defaultStyle.column, {marginBottom: 2}]}>
          <Text style={{fontSize: 15}}>Statistika</Text>
          <View style={[defaultStyle.column, mainStyle.itemGroup]}>
            <View style={defaultStyle.row}>
              <View style={[mainStyle.weekDay, {backgroundColor: '#ccc'}]}><Text>Du</Text></View>
              <View style={mainStyle.weekDay}><Text>Se</Text></View>
              <View style={mainStyle.weekDay}><Text>Ch</Text></View>
              <View style={mainStyle.weekDay}><Text>Pa</Text></View>
              <View style={mainStyle.weekDay}><Text>Ju</Text></View>
              <View style={mainStyle.weekDay}><Text>Sh</Text></View>
              <View style={mainStyle.weekDay}><Text>Ya</Text></View>
            </View>
            <View style={defaultStyle.column}>
              <View style={mainStyle.stats}><Text>Qo'shilgan so'zlar: 0</Text></View>
              <View style={mainStyle.stats}><Text>Yodlangan so'zlar: 0</Text></View>
              <View style={mainStyle.stats}><Text>Takrorlash kerak bo'lgan so'zlar: 0</Text></View>
            </View>
            <View style={[mainStyle.hr, {marginVertical: 10}]}></View>
            <View style={[defaultStyle.row, defaultStyle.between]}>
              <View style={defaultStyle.column}>
                <View style={defaultStyle.row}>
                  <FontAwesome name="line-chart" size={25} color={"#50C878"} style={{margin: 10, marginEnd: 15}}/>
                  <View style={defaultStyle.column}>
                    <Text style={{fontSize: 18}}>Kunlik reja</Text>
                    <Text style={{fontSize: 20}}>0/10</Text>
                  </View>
                </View>
                <Text style={{margin: 5, fontSize: 15}}>Bir oyda 0/300 ta yangi so'z</Text>
              </View>
              <TouchableOpacity style={{width: 50, height: 50, padding: 9, backgroundColor: '#0f0', borderRadius: 10}}>
                <Ionicons name="pencil" size={30} color={'#000'}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[defaultStyle.column, {marginBottom: 2}]}>
          <Text style={{fontSize: 15}}>Dastur haqida</Text>
          <View style={[defaultStyle.column, mainStyle.itemGroup]}>
            <TouchableOpacity style={[defaultStyle.row, mainStyle.item]}>
              <Octicons name="feed-discussion" size={25} color={"#50C878"} />
              <Text style={{marginStart: 10, fontSize: 20}}>Fikr-mulohazalar</Text>
            </TouchableOpacity>
            <View style={mainStyle.hr}></View>
            <TouchableOpacity style={[defaultStyle.row, mainStyle.item]}>
              <AntDesign name="infocirlceo" size={25} color={"#B91786"} />
              <Text style={{marginStart: 10, fontSize: 20}}>Dastur haqida ma'lumot</Text>
            </TouchableOpacity>
            <View style={mainStyle.hr}></View>
            <TouchableOpacity style={[defaultStyle.row, mainStyle.item]}>
              <AntDesign name="contacts" size={25} color={"#9457EB"} />
              <Text style={{marginStart: 10, fontSize: 20}}>Bog'lanish</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

