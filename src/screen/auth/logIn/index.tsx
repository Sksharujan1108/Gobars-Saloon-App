import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles';
import { Constants } from './constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TextInputField from '@/component/input/TextInput';
import TextButton from '@/component/button/Text_Button';
import PrimaryButton from '@/component/button/PrimaryButton';
import { ColorSheet } from '@/utilis/ColorSheet';

const LogIn = () => {
    const [form, setForm] = useState({
        email: '',
        setEmail: '',
        emailError: '',
        setEmailError: '',
        password: '',
        passwordError: '',
        setPasswordError: ''
    });

  return (
    <View style={styles.root}>

    <View style={styles.imgContainer}>
      {/* Image Bg */}
      <Image
        style={styles.imgBgStyle}  // Apply the styles from styles.js
        source = {require('@/assets/image/LogIn/PicLogin.png')}
      />

      {/* Img Picture */}
      <Image
        style={styles.imgPicStyle}  // Apply the styles from styles.js
        source = {require('@/assets/image/LogIn/Picture.png')}
      />
    </View>

    {/* LogIn Card */}
    <View style={styles.loginBottomContainer}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator = {false}
        //   bounces = {false}
        >
            <View style = {styles.mainViewContainer}>
                {/* WelCome Title */}
                <Text style = {styles.title}> {Constants.TITLE} </Text>
                {/* Sub Title */}
                <Text style = {styles.SubTitle}> {Constants.SUB_TITLE} </Text>
                
                {/* Input Field */}
                {/* Email Input Field */}
                <TextInputField
                    placeholder = {Constants.EMAIL_PLACEHOLDER}
                    value = {form.email}
                    onChangeText = {(email) => setForm({...form, email })}
                    textError = {form.emailError}
                    onFocus = {() => setForm({...form, emailError: ''})}
                />

                {/* Password Input Field */}
                <TextInputField
                   placeholder = {Constants.PASSWORD_PLACEHOLDER}
                   value = {form.password}
                   onChangeText = {(password) => setForm({...form, password })}
                   textError = {form.passwordError}
                   secureTextEntry
                   onFocus = {() => setForm({...form, passwordError: ''})}
                />

                {/* ForgotPassword */}
                <TextButton
                  textStyle = {{textAlign: 'right'}}
                  title = {Constants.FORGOT_PASSWORD_TITLE}
                />

                {/* Button */}
                <PrimaryButton
                  style = {styles.buttonContainer}
                  title = {Constants.LOGIN_BUTTON_TITLE}
                  onPress={() => {
                    console.log('hi');
                    
                  }}
                />

                {/* Don't have an account? Register */}
                <View style = {styles.registerContainer}>
                    <Text style = {styles.registerText}> {Constants.REGISTER_TITLE} </Text>
                    <TextButton
                      textStyle = {{
                        color: ColorSheet.PrimaryButton,
                        textDecorationLine: 'underline',
                      }}
                      title = {Constants.REGISTER_BUTTON_TITLE}
                      onPress = {() => {
                        console.log('Register');  
                      }}
                    />
                </View>

            </View>
        </KeyboardAwareScrollView>
    </View>

  </View>
  )
}

export default LogIn;