import { View, Image, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { feetback } from '../../assets/styles/info';
import { defaultStyle } from '../../assets/styles/defaultStyle';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';

const Feedback = () => {
    const [feetActiveBtn, setFeetActiveBtn] = useState('');

    return (
        <ScrollView>
            <Image
                style={{width: '100%', height: 200}}
                source={require('../../assets/img/feedback.png')}
            />
            <View style={feetback.main}>
                <Text style={[defaultStyle.tCenter, {fontSize: 17}]}>Dastur haqida fikringizni va taklifingizni bildirmoqchi bo‘lsangiz yoki dasturda xatolik va kamchiliklarini sezsangiz bizga xabar bering. Biz buni ko‘rib chiqamiz va bu kelajakda o‘sishga yordam beradi.</Text>
                <View style={[defaultStyle.row, feetback.btnGroup]}>
                    <TouchableOpacity style={[feetback.feedBackBtn, {borderColor: '#f00', borderWidth: (feetActiveBtn=="angry")? 1: 0}]} onPress={()=>setFeetActiveBtn("angry")}>
                        <MaterialCommunityIcons name='emoticon-angry-outline' size={35} color={'#f00'}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[feetback.feedBackBtn, {borderColor: '#F050C7FF', borderWidth: (feetActiveBtn=="sad")? 1: 0}]} onPress={()=>setFeetActiveBtn("sad")}>
                        <MaterialCommunityIcons name='emoticon-sad-outline' size={35} color={'#F050C7FF'}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[feetback.feedBackBtn, {borderColor: '#555', borderWidth: (feetActiveBtn=="neutral")? 1: 0}]} onPress={()=>setFeetActiveBtn("neutral")}>
                        <MaterialCommunityIcons name='emoticon-neutral-outline' size={35} color={'#555'}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[feetback.feedBackBtn, {borderColor: '#F3A225FF', borderWidth: (feetActiveBtn=="norm")? 1: 0}]} onPress={()=>setFeetActiveBtn("norm")}>
                        <MaterialCommunityIcons name='emoticon-outline' size={35} color={'#F3A225FF'}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[feetback.feedBackBtn, {borderColor: '#26DA53FF', borderWidth: (feetActiveBtn=="excited")? 1: 0}]} onPress={()=>setFeetActiveBtn("excited")}>
                        <MaterialCommunityIcons name='emoticon-excited-outline' size={35} color={'#26DA53FF'}/>
                    </TouchableOpacity>
                </View>
                <TextInput style={feetback.input} placeholder='Sizning emailingiz'/>
                <TextInput style={[feetback.input, feetback.textArea]} multiline={true} placeholder='Fikr-mulohazalar ...'/>
                <TouchableOpacity style={feetback.sendBtn}>
                    <Text style={{fontSize: 16, color: '#fff', textAlign: 'center'}}>Yuborish</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Feedback;
