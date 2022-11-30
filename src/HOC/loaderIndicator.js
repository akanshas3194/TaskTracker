import { View,ActivityIndicator,StyleSheet} from 'react-native';
import React from 'react'
import { useSelector } from 'react-redux';
import { colors } from '../Constants/color';

  const Loading=(Component)=>{
   
    
        const Loading=()=>{
        const isloading =useSelector(state=>state.employeeData.isAddCardLoading)
      
        return(
          <View style={{flex:1,}}>
           <Component/>
        {isloading &&
        <View
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: colors.BgColor, justifyContent: 'center' }
          ]}>
          <ActivityIndicator size="large" />
        </View>}
        
        </View>
        )}

return Loading;


}

export default Loading;