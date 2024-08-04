import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '@/screen/auth/splash';
import { AuthStackParamList } from '@/navigation/navigation_Models/auth_Models/authModels';
import OnBoarding from '@/screen/auth/onBoarding';
import LogIn from '@/screen/auth/logIn';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName = 'LogInScreen'
      screenOptions = {{ headerShown: false }}
    >
        <Stack.Screen name = "SplashScreen" component = {Splash} />
        <Stack.Screen name = "OnBoardingScreen" component = {OnBoarding} />
        <Stack.Screen name = "LogInScreen" component = {LogIn} />
        <Stack.Screen name = "ForgotPasswordScreen" component = {OnBoarding} />
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})