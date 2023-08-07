const { View, TextInput, ScrollView } = require("react-native");

import { nums } from "../../assets/styles/nums";
import { defaultStyle } from "../../assets/styles/defaultStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";


const Nums = () => {
    return(
        <View style={defaultStyle.container}>
            <View style={[defaultStyle.row, defaultStyle.between]}>
                <TextInput style={nums.input}/>
                <TouchableOpacity style={nums.btn}>
                    <Ionicons name="search" size={30} color={'#fff'}/>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {/* <FlatList
                data={list}
                renderItem={({item}) => (
                    <View style={[nums.item, defaultStyle.row, defaultStyle.between]}>
                    <View>
                        <Text style={addedList.itemName}>So'z: {item.name}</Text>
                        <Text style={addedList.itemTranslation}>Tarjimasi: {item.translation}</Text>
                        <Text style={addedList.itemTranscription}>Transkripsiyasi: {item.transcription}</Text>
                        <Text style={addedList.example}>Namuna: {item.example}</Text>
                        <Text style={addedList.exampleMeang}>Namuna tarjimasi: {item.exampleMeaning}</Text>
                    </View>
                    <View style={defaultStyle.column}>
                    <TouchableOpacity style={[addedList.moreListBtn, defaultStyle.row]}
                        onPress={()=>editHandler(item)}>
                        <Feather name="edit" size={25} color={"#000"} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[addedList.moreListBtn, defaultStyle.row]}
                        onPress={()=>setDeleteId(item.id)}>
                        <Feather name="trash" size={25} color={"#f00"} />
                    </TouchableOpacity>
                    </View>
                    </View>
                )}
                keyExtractor={item => item.id}
                />  */}
            </ScrollView>
        </View>
    )
}

export default Nums;





function numberToEnglish(number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const thousands = ['', 'thousand', 'million', 'billion', 'trillion'];
  
    function convertChunk(number) {
      if (number === 0) return '';
      if (number < 10) return ones[number];
      if (number < 20) return teens[number - 10];
      if (number < 100) {
        const tensDigit = Math.floor(number / 10);
        const onesDigit = number % 10;
        return tens[tensDigit] + (onesDigit !== 0 ? '-' + ones[onesDigit] : '');
      }
      if (number < 1000) {
        const hundredsDigit = Math.floor(number / 100);
        const remainder = number % 100;
        return ones[hundredsDigit] + ' hundred' + (remainder !== 0 ? ' and ' + convertChunk(remainder) : '');
      }
    }
  
    if (number === 0) return 'zero';
  
    let result = '';
    let chunkIndex = 0;
  
    while (number > 0) {
      const chunk = number % 1000;
      if (chunk !== 0) {
        result = convertChunk(chunk) + ' ' + thousands[chunkIndex] + ' ' + result;
      }
      number = Math.floor(number / 1000);
      chunkIndex++;
    }
  
    // return result.trim();
    alert(result.trim())
  }
  
//   // Test the function
//   const num = 123456789;
//   const englishNumber = numberToEnglish(num);
//   console.log(englishNumber);
  