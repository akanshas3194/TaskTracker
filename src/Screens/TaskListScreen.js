import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, SafeAreaView, FlatList} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../Constants/color';
import CelandarComponent from '../Components/CelandarComponent';
import { updateWorkingDate } from '../Store/Slices/taskSlice';
import {  requestForUserTask } from '../Store/Slices/taskSlice';
import TaskCard from '../Components/TaskCard';
import TaskHeaderComponent from '../Components/TaskHeaderComponent';
import { useNavigation } from '@react-navigation/native';
import Loading from '../HOC/loaderIndicator';
import { requestForLogoutUser } from '../Store/Slices/authSlice';

const TaskListScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const workingDate = useSelector(state => state.employeeData.workingDate);
    const taskItem = useSelector(state=>state.employeeData.userTask)
    const [modalVisible, setModalVisible] = useState(false);
    const [statusModal, setstatusModal] = useState(false);
    const [date , setDate] = useState('');
    
    useEffect(()=>{
       dispatch(requestForUserTask())
      },[])


    const handleDayPress = (day) => {
        setDate(day.dateString)
    }
    const handleTaskPress=()=>{
        {date && dispatch(updateWorkingDate(date))}
        setModalVisible(false)
    }
    const addTaskHandler =()=>{
        navigation.navigate("AddProjectScreen")
    }

    const onlogoutPresshandler=()=>{
        dispatch(requestForLogoutUser())
    }
    
    const ModalContent = () => {
        return (
            <Modal
                visible={modalVisible}
                animationType="none"
                transparent={true}
            >
                <SafeAreaView style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <CelandarComponent
                            initialDate={date}
                            dayPressHandler={handleDayPress}
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelButtonView}>
                                <Text style={styles.cancelText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleTaskPress} style={styles.doneButtonView}>
                                <Text style={styles.okText}>Show Task</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
        )
    }
    const statusModalComponent = () => {
        return (<Modal
            visible={statusModal}
            animationType="none"
            transparent={true}
        >
            <SafeAreaView style={styles.modalContainer}>
                <View style={styles.modalView}>
                    <View style={styles.statusButtonMainView}>
                        <TouchableOpacity onPress={() =>setstatusModal(false)} style={styles.cancelButtonView}>
                            <Text style={styles.cancelText}>hold</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setstatusModal(false)} style={styles.doneButtonView}>
                            <Text style={styles.completeText}>complete</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </SafeAreaView>
        </Modal>)
    }


    return (
        <SafeAreaView style={styles.container}>
            {ModalContent()}
            {statusModalComponent()}
              <View style={styles.mainSection}>
               
              <TaskHeaderComponent 
               addTaskHandler={addTaskHandler} 
               workingDate={workingDate} 
               onDatePressHandler={()=> setModalVisible(true)} 
               onlogoutPresshandler={onlogoutPresshandler} />
               
               <FlatList 
                 data={taskItem} 
                 renderItem={({item})=><TaskCard item={item} onStatusPressHandler={()=> setstatusModal(true)}/>} 
                 showsVerticalScrollIndicator={false} 
                 ListFooterComponent={()=> <View style={{height:150}}/>}
                 />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BgColor,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
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
        backgroundColor: colors.Cancelbtn,
        paddingHorizontal: 22,
        paddingVertical: 14,

    },
    cancelText: {
        fontSize: 17,
        color: colors.BgTaskColor
    },
    doneButtonView: {
        backgroundColor: colors.BtnBgColor,
        paddingHorizontal: 22,
        paddingVertical: 14,

    },
    okText: {
        fontSize: 17,
        color: colors.BgTaskColor,
    },
    completeText:{
        fontSize: 17,
        color: colors.BgTaskColor,

    },
    mainSection:{
        marginHorizontal:24,
        flex:1
    },
    statusButtonMainView:{
        backgroundColor:colors.BgTaskColor,
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:24,
        height:200,
        padding:20,
        alignItems:"center"
    }
    
});

export default Loading(TaskListScreen) ;
