import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import PrimaryButton from '@/component/button/PrimaryButton';
import TextInputField from '@/component/input/TextInput';
import MobileBackLogoHeader from '@/component/Back_LogoHeader';
import { AuthStackScreenProps } from '@/navigation/navigation_Models/auth_Models/authModels';
import { styles } from './styles';
import { Constants } from './constants';
import EmailOtpField from '@/screen/global/EmailOtp';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ErrorFlash } from '@/utilis/flashMessage';

const Authentication = ({navigation}: AuthStackScreenProps<'AuthenticationScreen'>) => {
  const [otp, setOtp] = useState();
  const [seconds, setSeconds] = useState(60);

  const [isDisable, setIsDisable] = useState(true)

  useEffect(() => {
    if (seconds == 0) {
      setIsDisable(false);
      return;
    } else {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds == 0) {
            clearInterval(timer);
          }
          return prevSeconds - 1
        })
      }, 1000)
      return () => clearInterval(timer);
    }
  }, [seconds])

  const onPressResendOtp = () => {
    setSeconds(60);
    setIsDisable(true);
  };

  const onPressSend = () => {
    if (otp !== 4) {
      ErrorFlash(Constants.ENTER_VALID_OTP)
    }
    navigation.goBack()
  };

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
        <Text style = {styles.subTitle}>{Constants.SUB_TITLE} </Text>
      
        {/* Code Input */}
        <EmailOtpField
          maskEnable = {true}
          onChangeValue = {(otp: any) => {
            setOtp(otp)
          }}
        />

        {/* Send Button */}
        <PrimaryButton
          style = {styles.buttonContainer}
          title = {Constants.SEND_BUTTON_TITLE}
          onPress = {onPressSend}
        />

        {/* Have not receive code? */}
        <TouchableOpacity
          style = {styles.notReceiveBtn}
          activeOpacity = {0.5}
          disabled={isDisable}  // Ensure the button is disabled when the timer is active
          onPress={onPressResendOtp}
        >
          <Text style = {styles.notReceiveText}> 
            {isDisable 
              ? `Resend in ${seconds}s` 
              : `${Constants.NOT_RECEIVE}`
            }
          </Text>
        </TouchableOpacity>

      </View>

      </SafeAreaView>

    </View>
  )
}

export default Authentication;