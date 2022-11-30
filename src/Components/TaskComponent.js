import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../Constants/color'


export default function TaskComponent(props) {
  const {item, onStatusPressHandler=()=>{}}=props

  return (
    <TouchableOpacity style={styles.container} onPress={()=>onStatusPressHandler(item)}>
      <Text style={styles.projectName}>{item.taskName}</Text>
      <Text style={styles.projectName}>{item.userName}</Text>
      <Text style={styles.projectName}>{item.description}</Text>
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
