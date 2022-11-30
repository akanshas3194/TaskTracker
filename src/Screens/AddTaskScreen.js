import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput,SafeAreaView,Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../Constants/color';
import {  useSelector } from 'react-redux';
import TaskComponent from '../Components/TaskComponent';


const AddTaskScreen = () => {
    const navigation = useNavigation();
    const taskItem = useSelector(state=>state.employeeData.userTask)
    const[statusModal, setstatusModal]=useState(false);
    const[taskdetail, setTaskdetails]=useState({id:0, title:'', description:''});


    const handleAdd=()=>{
      setTaskdetails(taskdetail)
      setstatusModal(false)
                }

     const statusModalComponent = () => {
        return (
           <Modal
            visible={statusModal}
            animationType="none"
            transparent={true}>
               <SafeAreaView style={styles.modalContainer}>
                   <View style={styles.modalView}>
                     <View style={styles.statusButtonMainView}>
                      <Text style={{color:"black", fontSize:18, fontWeight:"bold"}}>{taskdetail.title}</Text>
              
                        <View style={styles.textAreaView}>
                            <TextInput 
                              placeholder='add description' 
                              placeholderTextColor={'999999'} 
                              value={taskdetail.description} 
                              style={{padding:0}} 
                              onChangeText={(task)=>setTaskdetails(TaskEdit=>({...TaskEdit,description:task}))}
                              editable={true}/>
                        </View>
                        <View style={{flexDirection:"row"}}>
                             <TouchableOpacity onPress={()=>handleAdd()} style={styles.addButtonView}>
                             <Text style={styles.addText}>Add</Text>
                             </TouchableOpacity>
                             <TouchableOpacity onPress={()=> setstatusModal(false)} style={styles.cancelButtonView}>
                             <Text style={styles.addText}>Cancel</Text>
                             </TouchableOpacity></View>
                       </View>
                </View>
               </SafeAreaView>
        </Modal>)
    }

    useEffect(() => {
        navigation.setOptions({
            headerTitleAlign:"center",
          title: 'Task',
          headerLeft: () => (
            <TouchableOpacity onPress={()=> navigation.goBack()}>
              <Icon name="arrow-left" size={25} color="#000" />
            </TouchableOpacity>
          ),
          headerRight: null,
        });
      }, [navigation]);

      const onStatusPressHandler=(item)=>{
           setstatusModal(true);
           setTaskdetails({title:item.taskName, id:item.id, description:item.description })
           }
    
    return (<View style={styles.container}>
          
        <SafeAreaView style={styles.container}>
            {statusModalComponent()}
              <View style={styles.mainSection}>
                <FlatList 
                 data={taskItem} 
                 renderItem={({item})=><TaskComponent item={item} onStatusPressHandler={onStatusPressHandler}/>} 
                 showsVerticalScrollIndicator={false}
                 ListFooterComponent={()=><View style={{height:150}}/>}
                 />
            </View>
        </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.BgColor,
    },
    mainSection:{
      marginHorizontal:24,
    },
    modalContainer: {
      flex: 1,
      backgroundColor:"rgba(0,0,0,0.6)",
    },
    modalView: {
      flex: 1,
      justifyContent: "center",
    },
    statusButtonMainView:{
      backgroundColor:colors.BgTaskColor,
      marginHorizontal:24,
      height:280,
      padding:12,
    },
    textAreaView:{
      borderWidth:1,
      height:100,
      paddingHorizontal:10,
      marginTop:40,
      borderRadius:5,
      marginHorizontal:8
    },
    addButtonView:{
      backgroundColor:colors.BtnBgColor,
      height:40,
      marginTop:15,
      justifyContent:"center",
      borderRadius:5,
      marginLeft:50
    },
    addText:{
      color:"white",
      marginHorizontal:20,
      textAlign:"center"
    },
    cancelButtonView:{
      backgroundColor:colors.Cancelbtn,
      height:40,
      marginTop:15,
      justifyContent:"center",
      borderRadius:5,
      marginHorizontal:30
    },
});

export default AddTaskScreen;
