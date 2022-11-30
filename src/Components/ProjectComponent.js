import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../Constants/color'

export default function ProjectComponent(props) {
const {onPress} = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.projectName}>ProjectComponent</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        marginVertical:10,
        backgroundColor:colors.BgTaskColor,
        padding:20,
        borderRadius:12
    },
    projectName:{
        fontSize:20,
        color:colors.black,
        fontWeight:"500"
    }
})
