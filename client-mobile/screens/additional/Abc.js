import { View, FlatList, Text, TouchableOpacity} from "react-native";
import * as Speech from 'expo-speech';

import { defaultStyle } from '../../assets/styles/defaultStyle'
import { absStyle } from "../../assets/styles/abc";
const Abc = () => {
  const speak = (name) => {
    Speech.speak(name);
  };
    return(
        <View style={[defaultStyle.container, absStyle.list]}>
            <FlatList
                data={absData}
                renderItem={({item}) => (
                    <TouchableOpacity 
                        style={[absStyle.item, defaultStyle.row, defaultStyle.around]}
                        onPress={()=>speak(item.name)}
                        >
                      <Text style={{fontSize: 17}}>{item.Uppercase}</Text>
                      <Text style={{fontSize: 16}}>{item.Lowercase}</Text>  
                      <Text style={{fontSize: 17}}>{item.name}</Text>  
                      <Text style={{fontSize: 17}}>{item.pronunciation}</Text>  
                      {/* <View style={[defaultStyle.row, defaultStyle.between]}>
                        <TouchableOpacity style={nums.listBtn} onPress={()=>showNum(item.name, item.ordinal)}>
                          <Ionicons name="eye" size={20} color={'#000'}/>
                        </TouchableOpacity >
                        <TouchableOpacity style={nums.listBtn} onPress={()=>speak(item.name)}>
                          <AntDesign name="sound" size={20} color={'#000'}/>
                        </TouchableOpacity>
                      </View> */}
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.Uppercase}
                /> 
        </View>
    )
}

export default Abc;


const absData = [
    {Uppercase: 'A', Lowercase: 'a', name: 'a', pronunciation: '[eɪ]'},
    {Uppercase: 'B', Lowercase: 'b', name: 'bee', pronunciation: '[biː]'},
    {Uppercase: 'C', Lowercase: 'c', name: 'cee', pronunciation: '[siː]'},
    {Uppercase: 'D', Lowercase: 'd', name: 'dee', pronunciation: '[diː]'},
    {Uppercase: 'E', Lowercase: 'e', name: 'e', pronunciation: '[iː]'},
    {Uppercase: 'F', Lowercase: 'f', name: 'ef', pronunciation: '[ef]'},
    {Uppercase: 'G', Lowercase: 'g', name: 'gee', pronunciation: '[dʒiː]'},
    {Uppercase: 'H', Lowercase: 'h', name: 'aitch', pronunciation: '[eɪtʃ]'},
    {Uppercase: 'I', Lowercase: 'i', name: 'i', pronunciation: '[aɪ]'},
    {Uppercase: 'J', Lowercase: 'j', name: 'jay', pronunciation: '[dʒeɪ]'},
    {Uppercase: 'K', Lowercase: 'k', name: 'kay', pronunciation: '[keɪ]'},
    {Uppercase: 'L', Lowercase: 'l', name: 'el', pronunciation: '[el]'},
    {Uppercase: 'M', Lowercase: 'm', name: 'em', pronunciation: '[em]'},
    {Uppercase: 'N', Lowercase: 'n', name: 'en', pronunciation: '[ɛn]'},
    {Uppercase: 'O', Lowercase: 'o', name: 'o', pronunciation: '[əʊ]'},
    {Uppercase: 'P', Lowercase: 'p', name: 'pee', pronunciation: '[piː]'},
    {Uppercase: 'Q', Lowercase: 'q', name: 'cue', pronunciation: '[kjuː]'},
    {Uppercase: 'R', Lowercase: 'r', name: 'ar', pronunciation: '[ɑː, ar]'},
    {Uppercase: 'S', Lowercase: 's', name: 'ess', pronunciation: '[es]'},
    {Uppercase: 'T', Lowercase: 't', name: 'tee', pronunciation: '[tiː]'},
    {Uppercase: 'U', Lowercase: 'u', name: 'u', pronunciation: '[juː]'},
    {Uppercase: 'V', Lowercase: 'v', name: 'vee', pronunciation: '[viː]'},
    {Uppercase: 'W', Lowercase: 'w', name: 'double-u', pronunciation: '[dʌbljuː]'},
    {Uppercase: 'X', Lowercase: 'x', name: 'ex', pronunciation: '[eks]'},
    {Uppercase: 'Y', Lowercase: 'y', name: 'wy', pronunciation: '[waɪ]'},
    {Uppercase: 'Z', Lowercase: 'z', name: 'zed, zee', pronunciation: '[zɛd, ziː]'}
]

























