import { Image, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from '@/component/button/PrimaryButton';
import { styles } from './styles';
import { AuthStackScreenProps } from '@/navigation/navigation_Models/auth_Models/authModels';

const Welcome = ({navigation}: AuthStackScreenProps<'WelcomeScreen'>) => {
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
          onPress={() => {
            navigation.navigate('LogInScreen')
          }}
        />
      </View>

    </View>
  );
}

export default Welcome;
