import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Book from '@/screen/app/book';
import { BookStackParamList } from '@/navigation/navigation_Models/app_Models/book/book_Models';

const Stack = createNativeStackNavigator<BookStackParamList>();

const BookStack = () => {
  return (
    <Stack.Navigator
      initialRouteName = 'BookScreen'
      screenOptions = {{ headerShown: false }}
    >
        <Stack.Screen name = "BookScreen" component = {Book} />
    </Stack.Navigator>
  )
}

export default BookStack;