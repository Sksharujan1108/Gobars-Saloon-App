import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles';
import { Constants } from './constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TextInputField from '@/component/input/TextInput';
import TextButton from '@/component/button/Text_Button';
import PrimaryButton from '@/component/button/PrimaryButton';
import { ColorSheet } from '@/utilis/ColorSheet';
import { AuthStackScreenProps } from '@/navigation/navigation_Models/auth_Models/authModels';
import { isEmail, isPassword } from '@/utilis/validations';
import { ErrorFlash } from '@/utilis/flashMessage';

const LogIn = ({navigation}: AuthStackScreenProps<'LogInScreen'>) => {
    const [form, setForm] = useState({
        email: '',
        emailError: '',
        password: '',
        passwordError: '',
    });

    const handleLogIn = () => {
      if (isEmail(form.email)) {
          ErrorFlash(Constants.VALID_EMAIL)
      } else if (form.email === '') {
          ErrorFlash(Constants.EMAIL_REQUIRED)
      } else if (isPassword(form.password)) {
          ErrorFlash(Constants.VALID_PASS)
      } else if (form.password === '') {
          ErrorFlash(Constants.PASSWORD_REQUIRED)
      } else {
            // 
      }
    }

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
        //   enableOnAndroid
        //   enableAutomaticScroll
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
                <Text style = {styles.inputTitle}> {'UserName'} </Text>
                <TextInputField
                    placeholder = {Constants.EMAIL_PLACEHOLDER}
                    value = {form.email}
                    onChangeText = {(text) => setForm({...form, email: text })}
                    textError = {form.emailError}
                    onFocus = {() => setForm({...form, emailError: ''})}
                    onBlur={() => {
                        if (form.email === '') {
                          setForm({...form, emailError: Constants.EMAIL_REQUIRED });
                        } else {
                            setForm({...form, emailError: '' });
                        }
                    }}
                />

                {/* Password Input Field */}
                <Text style = {styles.inputTitle}> {'Password'} </Text>
                <TextInputField
                   placeholder = {Constants.PASSWORD_PLACEHOLDER}
                   value = {form.password}
                   onChangeText = {(text) => setForm({...form, password: text })}
                   textError = {form.passwordError}
                   secureTextEntry
                   onFocus = {() => setForm({...form, passwordError: ''})}
                   onBlur={() => {
                    if (form.password === '') {
                      setForm({...form, passwordError: Constants.PASSWORD_REQUIRED });
                    } else {
                      setForm({...form, passwordError: '' });
                    }
                  }}
                />

                {/* ForgotPassword */}
                <TextButton
                  textStyle = {styles.forgotStyle}
                  title = {Constants.FORGOT_PASSWORD_TITLE}
                  onPress={() => {
                    navigation.navigate('ForgotPasswordScreen')
                  }}
                />

                {/* Button */}
                <PrimaryButton
                  style = {styles.buttonContainer}
                  title = {Constants.LOGIN_BUTTON_TITLE}
                  onPress={handleLogIn}
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