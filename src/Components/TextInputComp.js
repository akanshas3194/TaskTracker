import React from 'react';
import { View, Text,TextInput, StyleSheet} from 'react-native';

const TextInputComp=({textLabel,textPlaceholder,value,changeHandler, style,keyName})=>{
    return(
        <View style={{margin:5}}>
                   
        <Text style={style}>{textLabel}</Text>
           <TextInput placeholder={textPlaceholder} placeholderTextColor={'#999999'} 
           value={value} onChangeText={(text)=> changeHandler(text,keyName)} style={styles.textWrapper}
           />
       </View>
    )
}

const styles = StyleSheet.create({
    textWrapper:{
        borderWidth:1, 
        borderColor:"#e6e6e6", 
        borderRadius:10, 
        height:48, 
        marginTop:8,
        paddingHorizontal:10
    },
})

export default TextInputComp;