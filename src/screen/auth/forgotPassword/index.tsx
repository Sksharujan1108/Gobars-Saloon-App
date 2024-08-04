import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Constants } from './constants'
import { styles } from './styles'
import TextInputField from '@/component/input/TextInput'
import { AuthStackScreenProps } from '@/navigation/navigation_Models/auth_Models/authModels'
import PrimaryButton from '@/component/button/PrimaryButton'
import TextButton from '@/component/button/Text_Button'
import { ColorSheet } from '@/utilis/ColorSheet'
import MobileBackLogoHeader from '@/component/Back_LogoHeader'

const ForgotPassword = ({navigation}: AuthStackScreenProps<'ForgotPasswordScreen'>) => {
    const [form, setForm] = useState({
        email: '',
        emailError: '',
    });

    const onPressSend = () => {
        if (form.email === '') {
            Alert.alert(Constants.EMAIL_REQUIRED)
        } else {
            navigation.navigate('AuthenticationScreen', {
                email: form.email
            })
        }
    }

  return (
    <View style = {styles.root}>
      {/* SafeArea */}
      <SafeAreaView style = {{ flex:1 }}>
        {/* Main View Container */}
      <View style = {styles.mainViewContainer}>
        {/* Title */}
        <MobileBackLogoHeader
          headerTitle = {Constants.TITLE}
          onPress = {() => 
            navigation.goBack()
          }
        />
        {/* SubTitle */}
        <Text style = {styles.subTitle}> {Constants.SUB_TITLE} </Text>
      
        {/* Email Input */}
        <Text style = {styles.inputTitle}> {'Email'} </Text>
        <TextInputField
          placeholder = {Constants.EMAIL_PLACEHOLDER}
          value = {form.email}
          onChangeText = {(text) => setForm({...form, email: text})}
        //   onFocus={() => setForm({...form, emailError: ''})}
          textError = {form.emailError}
          onBlur={() => {
            if (form.email === '') {
              setForm({...form, emailError: Constants.EMAIL_REQUIRED });
            } else {
              setForm({...form, emailError: '' });
            }
          }}
        />

        {/* Send Button */}
        <PrimaryButton
          style = {styles.buttonContainer}
          title = {Constants.SEND_BUTTON_TITLE}
          onPress = {onPressSend}
        />

      </View>

      </SafeAreaView>

    </View>
  )
}

export default ForgotPassword;