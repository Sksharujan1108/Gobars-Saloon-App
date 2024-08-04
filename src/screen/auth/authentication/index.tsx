import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryButton from '@/component/button/PrimaryButton';
import TextInputField from '@/component/input/TextInput';
import MobileBackLogoHeader from '@/component/Back_LogoHeader';
import { AuthStackScreenProps } from '@/navigation/navigation_Models/auth_Models/authModels';
import { styles } from './styles';
import { Constants } from './constants';
import EmailOtpField from '@/screen/global/EmailOtp';
import TextButton from '@/component/button/Text_Button';

const Authentication = ({navigation}: AuthStackScreenProps<'AuthenticationScreen'>) => {

  const onPressSend = () => {

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
        <Text style = {styles.subTitle}> {Constants.SUB_TITLE} </Text>
      
        {/* Code Input */}
        <EmailOtpField/>

        {/* Send Button */}
        <PrimaryButton
          style = {styles.buttonContainer}
          title = {Constants.SEND_BUTTON_TITLE}
          onPress = {onPressSend}
        />

        {/* Have not receive code? */}
        <TextButton
          textStyle = {styles.notReceiveText}
          title = {Constants.NOT_RECEIVE}
        />

      </View>

      </SafeAreaView>

    </View>
  )
}

export default Authentication;