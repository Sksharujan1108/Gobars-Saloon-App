import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookStackParamList } from '@/navigation/navigation_Models/app_Models/book/book_Models';
import BookAppointment from '@/screen/app/book';
import DetailsAppointment from '@/screen/app/detailsAppointment';

const Stack = createNativeStackNavigator<BookStackParamList>();

const BookStack = () => {
  return (
    <Stack.Navigator
      initialRouteName = 'DetailsAppointmentScreen'
      screenOptions = {{ headerShown: false }}
    >
        <Stack.Screen name = "BookScreen" component = {BookAppointment} />
        <Stack.Screen name = "DetailsAppointmentScreen" component = {DetailsAppointment} />
    </Stack.Navigator>
  )
}

export default BookStack;