import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import TaskListScreen from '../Screens/TaskListScreen';
import {  useSelector } from 'react-redux';
import Splash from '../Screens/Splash';
import AddTaskScreen from '../Screens/AddTaskScreen';
import AddProjectScreen from '../Screens/AddProjectScreen';

const Stack = createNativeStackNavigator();


// AuthStack Navigation Component 
const AuthStack =()=>{

  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      </Stack.Navigator>
  )
}

// HomeStack Navigation Component 
const HomeStack=()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="TaskListScreen" component={TaskListScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} options={{ headerShown: true ,title: 'Add Task' }}/>
      <Stack.Screen name="AddProjectScreen" component={AddProjectScreen} options={{ headerShown: true ,title: 'Add Project' }} />
    </Stack.Navigator>
)
}


const Navigation = () => {
  const userAuth = useSelector(state=>state.auth.userAuth)
  return (
    <NavigationContainer>
     <Stack.Navigator>
     {userAuth===0 &&<Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>}
     {userAuth===2 && <Stack.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />}
     {userAuth===1 &&<Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;