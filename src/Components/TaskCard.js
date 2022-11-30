import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,} from 'react-native';
import { colors } from '../Constants/color';

const TaskCard = (props) => {
    const { item,onStatusPressHandler=()=>{} } = props


    return (
        <View style={styles.containerTask}>
            <View style={styles.sideContainer}>
                <Text>.</Text>
            </View>
            <View style={styles.timeMainSection}>
                <Text style={styles.taskHeader}>{item.taskName}</Text>
                <View style={styles.timeclockWrapper}>
                    <Text style={styles.timeclockText}>00:00</Text>
                </View>
            </View>
            <View style={{ marginRight:10,marginTop:20}}>
                <TouchableOpacity onPress={onStatusPressHandler} style={styles.btnStyle}>
                    <Text style={styles.btnText}>Stop</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerTask: {
        backgroundColor: colors.BgTaskColor,
        flex: 1,
        borderRadius: 15,
        flexDirection: "row",
        marginVertical:10,
    },
    sideContainer: {
        backgroundColor: "yellow",
        padding: 0,
        margin: 0,
        width: 30,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },
    btnStyle: {
        backgroundColor: colors.BtnBgColor,
        borderRadius: 6,
        paddingVertical:12,
        paddingHorizontal:20
    },
    btnText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 15
    },
    taskHeader: {
        fontWeight: "bold",
        fontSize: 17,
    },
    timeclockWrapper: {
        flexDirection: "row",
    },
    timeclockText: {
        fontWeight: "bold",
        fontSize: 25,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        height: 150,
    },

    modalView: {
        flex: 1,
        justifyContent: "center",

    },
    buttonContainer: {
        marginTop: 100,
        flexDirection: "row",
        marginHorizontal: 24,
        justifyContent: "space-between"

    },
    cancelButtonView: {
        backgroundColor: colors.BtnBgColor,
        paddingHorizontal: 22,
        paddingVertical: 14,

    },
    cancelText: {
        fontSize: 17,
        color: "#fff"
    },
    doneButtonView: {
        backgroundColor: colors.BtnBgColor,
        paddingHorizontal: 22,
        paddingVertical: 14,

    },
    okText: {
        fontSize: 17,
        color: "#fff",
    },
    timeMainSection:{ 
        marginVertical:20 ,
        flex:1 ,
        marginLeft:10
    }

})
export default TaskCard;