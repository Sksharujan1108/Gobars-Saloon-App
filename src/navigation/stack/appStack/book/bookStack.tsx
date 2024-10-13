import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookStackParamList } from '@/navigation/navigation_Models/app_Models/book/book_Models';
import BookAppointment from '@/screen/app/book';

const Stack = createNativeStackNavigator<BookStackParamList>();

const BookStack = () => {
  return (
    <Stack.Navigator
      initialRouteName = 'BookScreen'
      screenOptions = {{ headerShown: false }}
    >
        <Stack.Screen name = "BookScreen" component = {BookAppointment} />
    </Stack.Navigator>
  )
}

export default BookStack;