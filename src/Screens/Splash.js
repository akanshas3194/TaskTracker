import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { colors } from '../Constants/color';
import { checkUserAuth } from '../Store/Slices/authSlice';


const Splash = () => {
  const dispatch = useDispatch()
  const checkUserAuthentication = async () => {
    const token = await AsyncStorage.getItem('Token_Key')
   
    if (token != null) {
      dispatch(checkUserAuth(2))
    }
    else {
      dispatch(checkUserAuth(1))
    }
  }

  useEffect(() => {
    setTimeout(() => {
      checkUserAuthentication()
    }, 2000);
  }, [])


  return (<View style={{ flex: 1, justifyContent: 'center', backgroundColor: colors.BgColor, alignItems:"center"}}>
    <Image source={require('.././image/logo.png')} style={{ heigh: 40, width: 225, borderRadius: 120 }} />
  </View>
  )
}

export default Splash;