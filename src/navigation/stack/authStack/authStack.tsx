import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '@/screen/auth/splash';
import { AuthStackParamList } from '@/navigation/navigation_Models/auth_Models/authModels';
import OnBoarding from '@/screen/auth/onBoarding';
import LogIn from '@/screen/auth/logIn';
import ForgotPassword from '@/screen/auth/forgotPassword';
import Authentication from '@/screen/auth/authentication';
import Register from '@/screen/auth/Register';
import AppBottomTop from '@/navigation/tabs/mobile_bottom_tab';
import Welcome from '@/screen/auth/welcome';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName = 'WelcomeScreen'
      screenOptions = {{ headerShown: false }}
    >
        <Stack.Screen name = "SplashScreen" component = {Splash} />
        <Stack.Screen name = "WelcomeScreen" component = {Welcome} />
        <Stack.Screen name = "OnBoardingScreen" component = {OnBoarding} />
        <Stack.Screen name = "LogInScreen" component = {LogIn} />
        <Stack.Screen name = "RegisterScreen" component = {Register} />
        <Stack.Screen name = "ForgotPasswordScreen" component = {ForgotPassword} />
        <Stack.Screen name = "AuthenticationScreen" component = {Authentication} />
        {/* Add the Bottom Stack */}
        <Stack.Screen name = "AppBottomTopScreen" component = {AppBottomTop} />
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})