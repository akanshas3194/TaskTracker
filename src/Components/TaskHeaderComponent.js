import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput,TouchableOpacity, } from 'react-native';
import { dateFormatter } from '../Common/utils';

const TaskHeaderComponent = (props) => {
    const {workingDate,onDatePressHandler,addTaskHandler, onlogoutPresshandler} = props
    return (
        <View style={styles.container}>
            <View style={styles.headingMainView}>
                <Text style={styles.headingTitle}>Your Task List</Text>
                <TouchableOpacity onPress={onlogoutPresshandler}><Text style={{fontSize:15, color:"#000"}}>Log out</Text></TouchableOpacity>
            </View>
          <View style={styles.inputView}>
          <TextInput 
            placeholder={"Search Task"}
            placeholderTextColor={"#000"}
            style={styles.headerInputSection}
            />
              <TouchableOpacity onPress={addTaskHandler} style={styles.addTaskButtonView}>
                <Text style={styles.addTaskText}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={onDatePressHandler} style={styles.dateSection}>
              <Text style={styles.dateText}>{dateFormatter('MMM DD YYYY' , workingDate)}</Text>
          </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent:"center",
    },
    headerInputSection:{
        height:48,
        backgroundColor:"#fff",
        borderRadius:12,
        paddingHorizontal:10,
        flex:1
    },
    addTaskButtonView:{
        height:48,
        width:50,
        alignItems:"center",
        justifyContent:"center",
        borderWidth:1,
        borderColor:"#000",
        borderRadius:12,
        marginLeft:10
    },
    addTaskText:{
        fontSize:17,
        color:"#000",
        fontWeight:"bold"
    },
    inputView:{
        flexDirection:"row",

    },
    dateSection:{
        marginTop:10
    },
    dateText:{
        color:"green",
        fontSize:15,
        textDecorationLine:"underline"
    },
    headingMainView:{
        marginVertical:15,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    headingTitle:{
        fontSize:20,
        color:"#000",
        fontWeight:"bold"
    }
});

export default TaskHeaderComponent;
