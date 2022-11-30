import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../Constants/color';

const Btn=({BtnLabel, onPress})=>{

    return(
        <View>
            <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
                <Text style={styles.btnText}>{BtnLabel}</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btnStyle:{
        backgroundColor:colors.BtnBgColor, 
        height:48,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center"
    },
    btnText:{
        color:"#ffffff" , 
        textAlign:"center",
        fontSize:18
    }

})
export default Btn;