import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Keyboard } from 'react-native';
import { colors } from '../Constants/color';
import Btn from '../Components/Btn';
import TextInputComp from '../Components/TextInputComp';
import { signup } from '../Store/Slices/authSlice';
import { useDispatch } from 'react-redux';
import InputScrollView from 'react-native-input-scroll-view';

const SignUp = ({ navigation }) => {

    const [userdetails, setUserDetails] = useState({firstName:'',lastName:'', email: '', password: '', re_confirm_pass: '' })
    const dispatch = useDispatch();

    const [isKeyboard, setKeyboard] = useState(Boolean);

    useEffect(() => {
        const onKeyBoardOn = Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
        const onKeyBoardOff = Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
        return () => {
            onKeyBoardOn && onKeyBoardOn.remove()
            onKeyBoardOff && onKeyBoardOff.remove()
        };
    }, []);
    const _keyboardDidShow = () => {
        setKeyboard(true);
    };

    const _keyboardDidHide = () => {
        setKeyboard(false);
    };

    const onChangeHandler = (text, key) => {
        setUserDetails({ ...userdetails, [key]: text })
    }


    return (
        <SafeAreaView style={styles.container}>
            <InputScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
                <View>
                    <View style={styles.headingSection}>
                        <Text style={styles.headerText}>Please fill the required details
                        </Text></View>
                    <TextInputComp
                        textLabel='First Name'
                        textPlaceholder='Enter your name'
                        value={userdetails.firstName}
                        style={styles.textInput}
                        keyName={'name'}
                        changeHandler={onChangeHandler} />
                    <TextInputComp
                        textLabel='Last Name'
                        textPlaceholder='Enter the last name'
                        value={userdetails.lastName}
                        style={styles.textInput}
                        keyName={'lname'}
                        changeHandler={onChangeHandler} />    
                    <TextInputComp
                        textLabel='Email'
                        textPlaceholder='Enter the email address'
                        value={userdetails.email}
                        style={styles.textInput}
                        keyName={'email'}
                        changeHandler={onChangeHandler} />
                    <TextInputComp
                        textLabel='Password'
                        textPlaceholder='Enter the Password'
                        value={userdetails.password}
                        style={styles.textInput}
                        keyName={'password'}
                        changeHandler={onChangeHandler} />
                    <TextInputComp
                        textLabel='Re-confirm'
                        textPlaceholder='Re-enter the Password'
                        value={userdetails.re_confirm_pass}
                        style={styles.textInput}
                        keyName={'re_confirm_pass'}
                        changeHandler={onChangeHandler} />
                    <View style={styles.buttonView}>
                        <Btn BtnLabel="Sign Up" onPress={() => dispatch(signup(userdetails))} />
                    </View>
                </View>
          
            {!isKeyboard && (
                <View style={styles.footerWrapper}>
                    <Text>Already have an account ?</Text>
                    <TouchableOpacity>
                        <Text style={styles.btnStyle} onPress={() => navigation.navigate('Login')}>Login here</Text>
                    </TouchableOpacity></View>
            )}
              </InputScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.BgColor,
        flex:1
    },
    mainContainer: {
        marginHorizontal: 24,
        marginBottom: 20
    },
    headingSection: {
        justifyContent: "center",
        alignItems: "center",
        height: 110
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 22,
        marginVertical: 20
    },
    textInput: {
        textAlign: "justify",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 12,

    },
    footerWrapper: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems:"center",
        marginVertical:10,
        flex:1
    },
    btnStyle: {
        fontSize: 16,
        fontWeight: "bold",
        paddingLeft: 2
    },
    buttonView: {
        flex:1,
        marginVertical:10
    }

})
export default SignUp;