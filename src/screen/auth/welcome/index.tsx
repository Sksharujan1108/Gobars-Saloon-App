import { Image, StyleSheet, Text, View, Platform } from 'react-native';
import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { ColorSheet } from '@/utilis/ColorSheet';
import { RFValue } from 'react-native-responsive-fontsize';
import PrimaryButton from '@/component/button/PrimaryButton';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgBackgroundContainer}>
        {/* Background image */}
        <Image 
          style={styles.imgBackground}
          source={require('@/assets/image/LogIn/BG_Image.png')}
        />

        {/* Gradient overlay */}
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 1)"]}
          style={styles.gradient}
        />

        <View style = {styles.headingContainer}>
          {/* Heading*/}
          <Text style={styles.heading_text}>{'Book your haircut in seconds'}</Text>
        </View>
        
      </View>

      <View style={styles.subTitle_container}>
        {/* SubTitle */}
        <Text style={styles.subTitle}>{'Schedule your next haircut within a few seconds. Easily reserve and manage your appointments.'}</Text>
      </View>

      {/* Button */}
      <View style = {styles.buttonContainer}>
        {/* Get Started */}
        <PrimaryButton
          style = {styles.getStart_button}
          textStyle = {styles.get_start_text}
          title='Get Started'
          onPress={() => {}}
        />

        <PrimaryButton
          style = {styles.login_button}
          textStyle = {styles.login_text}
          title='Login'
          onPress={() => {}}
        />
      </View>

    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  imgBackgroundContainer: {
    width: wp(100),
    height: '60%', // Adjust the image height
    alignItems: 'center',
    position: 'relative',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  headingContainer: {
    width: wp(90),
    position: 'absolute',
    bottom: Platform.OS == 'ios' ? 5 : 0,
    // backgroundColor: 'red'
  },
  heading_text: {
    fontSize: Platform.OS == 'ios' ? RFValue(28) : RFValue(32),
    fontWeight: '700',
    textAlign: 'center',
    color: ColorSheet.White,
    // marginTop: ,
  },
  subTitle_container: {
    width: wp(80),
    marginTop: hp(2),
    // backgroundColor: 'red'
  },
  subTitle: {
    fontSize: Platform.OS == 'ios' ? RFValue(12) : RFValue(14),
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: hp(3.5),
    color: ColorSheet.subTitle,
  },
  buttonContainer: {
    width: wp(100),
    marginTop: Platform.OS == 'ios' ? hp(2) : hp(4),
    padding: hp(3),
  },
  getStart_button: {
    paddingVertical: hp(2),
    borderRadius: hp(1),
    backgroundColor: ColorSheet.White,
  },
  get_start_text: {
    fontSize: Platform.OS == 'ios' ? RFValue(16) : RFValue(18),
    fontWeight: '700',
    textAlign: 'center',
    color: ColorSheet.Secondary,
  },
  login_button: {
    marginTop: hp(3),
    paddingVertical: hp(2),
    borderWidth: 1,
    borderColor: ColorSheet.BorderColor,
    borderRadius: hp(1),
    backgroundColor: ColorSheet.Secondary,
  },
  login_text: {
    fontSize: Platform.OS == 'ios' ? RFValue(16) : RFValue(18),
    fontWeight: '700',
    textAlign: 'center',
    color: ColorSheet.White,
  },
});
