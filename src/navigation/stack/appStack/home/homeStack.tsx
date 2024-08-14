import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from '@/navigation/navigation_Models/app_Models/home/home_Models';
import Home from '@/screen/app/home';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName = 'HomeScreen'
      screenOptions = {{ headerShown: false }}
    >
        <Stack.Screen name = "HomeScreen" component = {Home} />
    </Stack.Navigator>
  )
}

export default HomeStack;