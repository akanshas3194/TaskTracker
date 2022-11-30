import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Keyboard } from 'react-native';
import { colors } from '../Constants/color';
import Btn from '../Components/Btn';
import TextInputComp from '../Components/TextInputComp';
import { useDispatch, } from 'react-redux';
import { requestForLoginUser } from '../Store/Slices/authSlice';
import { useNavigation } from '@react-navigation/native';
import InputScrollView from 'react-native-input-scroll-view';

const Login = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const [userdetails, setUserDetails] = useState({ email: '', password: '' });
    const [isKeyboard, setKeyboard] = useState(Boolean);

    useEffect(() => {
        const onKeyBoardOn =   Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
        const onKeyBoardOff =   Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
           return () => {
               onKeyBoardOn &&   onKeyBoardOn.remove() 
               onKeyBoardOff && onKeyBoardOff.remove()
           };
       }, []);
       const _keyboardDidShow = () => {
        setKeyboard(true);
    };

    const _keyboardDidHide = () => {
        setKeyboard(false);
    };
    const handleOnChange = (text, key) => {
        setUserDetails(userdetails => ({ ...userdetails, [key]: text }))
       
    };

    const handleOnPress = () => {
        dispatch(requestForLoginUser(userdetails,(res)=>{console.log("login", res)}))
      
    };

   
    return (

        <SafeAreaView style={styles.container}>
            <InputScrollView contentOffset={{ bottom: 100 }} showsVerticalScrollIndicator={false} style={styles.mainContainer}>
                <View style={styles.headingSection}>
                    <Text style={styles.headerText}>Welcome Tracker App</Text>
                </View>
                <TextInputComp
                    textLabel='Email' Î
                    textPlaceholder='Enter your email'
                    value={userdetails.email}
                    style={styles.textInput}
                    keyName={'email'}
                    changeHandler={handleOnChange}
                />
                <TextInputComp
                    textLabel='Password'
                    textPlaceholder='Enter the password'
                    value={userdetails.password}
                    style={styles.textInput}
                    keyName={'password'}
                    changeHandler={handleOnChange} />
                <View style={styles.middleWrapper}>
                    <TouchableOpacity><Text style={styles.middleTextStyle} onPress={() => console.log()}>
                        Forget Password?</Text>
                    </TouchableOpacity></View>
                <View style={styles.buttonView}>
                    <Btn BtnLabel="Login" onPress={() => handleOnPress()} />
                </View>
            </InputScrollView>
            {!isKeyboard && (
                <View style={styles.footerWrapper}><Text> dont't have an account ?</Text>
                <TouchableOpacity><Text style={styles.btnStyle}
                    onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            )}
           
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BgColor,

    },
    mainContainer: {
        marginHorizontal: 24,
    },
    headingSection: {
        height: 120,
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 25,
        marginVertical: 20
    },
    textInput: {
        textAlign: "justify",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 15,

    },
    middleWrapper: {
        alignSelf: "flex-end",
        marginTop: 10
    },
    middleTextStyle: {
        color: '#a6a6a6',
    },
    footerWrapper: {
        flexDirection: "row",
        alignSelf: "center",
        position: "absolute",
        bottom: 20,
        alignItems:"center"
    },
    btnStyle: {
        fontSize: 16,
        fontWeight: "bold",
        paddingLeft: 2,

    },
    buttonView: {
        marginTop: 50
    }

})
export default Login;