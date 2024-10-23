import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from '@/navigation/navigation_Models/app_Models/home/home_Models';
import Home from '@/screen/app/home';
import HomeDetails from '@/screen/app/homeDetails';
import BarberDetailsHome from '@/screen/app/barberDetailsScreen/barberDetailsHome';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName = 'BarberDetailsHomeScreen'
      screenOptions = {{ headerShown: false }}
    >
        <Stack.Screen name = "HomeScreen" component = {Home} />
        <Stack.Screen name = "HomeDetailsScreen" component = {HomeDetails} />
        <Stack.Screen name = "BarberDetailsHomeScreen" component = {BarberDetailsHome} />
    </Stack.Navigator>
  )
}

export default HomeStack;