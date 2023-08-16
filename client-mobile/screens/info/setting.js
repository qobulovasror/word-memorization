import { Switch, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { setting } from '../../assets/styles/info';
import { defaultStyle } from '../../assets/styles/defaultStyle';

const Setting = () => {
    return (
        <ScrollView>
            <View style={defaultStyle.container}>
                <Text style={setting.textHeader}>Profil sozlanmalari</Text>
                <View style={setting.group}>
                    <TextInput placeholder='Ism' style={setting.input} editable={false}/>
                    <TextInput placeholder='Email' style={setting.input} editable={false}/>
                    <TouchableOpacity style={setting.sendBtn}>
                        <Text style={[defaultStyle.tCenter, {fontSize: 17, color: '#fff'}]}>Saqlash</Text>
                    </TouchableOpacity>
                </View>
                <Text style={setting.textHeader}>Xabar sozlanmalari</Text>
                <View style={setting.group}>
                    <View style={[defaultStyle.row, defaultStyle.between]}>
                        <Text style={[setting.text, {paddingTop: 8, fontSize: 18}]}>Bildrishnomalar</Text>
                        <Switch/>
                    </View>
                    <View style={setting.hr}></View>
                    <View style={[defaultStyle.row, defaultStyle.between]}>
                        <Text style={[setting.text, {paddingTop: 8, fontSize: 18}]}>Tebranish</Text>
                        <Switch/>
                    </View>
                </View>
                <Text style={setting.textHeader}>Xabar sozlanmalari</Text>
                <View style={setting.group}>
                    <View style={[defaultStyle.row, defaultStyle.between]}>
                        <Text style={[setting.text, {paddingTop: 8, fontSize: 18}]}>Dark mode</Text>
                        <Switch/>
                    </View>
                    <View style={setting.hr}></View>
                    <View style={[defaultStyle.row, defaultStyle.between]}>
                        <Text style={[setting.text, {paddingTop: 8, fontSize: 18}]}>Bildrishnomalar</Text>
                        <Switch/>
                    </View>
                    <View style={setting.hr}></View>
                    <View style={[defaultStyle.row, defaultStyle.between]}>
                        <Text style={[setting.text, {paddingTop: 8, fontSize: 18}]}>Tebranish</Text>
                        <Switch/>
                    </View>
                </View>
                <TouchableOpacity style={[setting.sendBtn, {backgroundColor: '#fff', borderWidth: 0.5}]}>
                    <Text style={{color:'#f00', fontSize: 17, textAlign: 'center'}}>Logout</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Setting;
