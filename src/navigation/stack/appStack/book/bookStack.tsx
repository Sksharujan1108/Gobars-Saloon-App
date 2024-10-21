import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookStackParamList } from '@/navigation/navigation_Models/app_Models/book/book_Models';
import BookAppointment from '@/screen/app/book';
import DetailsAppointment from '@/screen/app/detailsAppointment';
import BookingInvoice from '@/screen/app/bookingInvoice';

const Stack = createNativeStackNavigator<BookStackParamList>();

const BookStack = () => {
  return (
    <Stack.Navigator
      initialRouteName = 'BookAppointmentScreen'
      screenOptions = {{ headerShown: false }}
    >
        <Stack.Screen name = "BookAppointmentScreen" component = {BookAppointment} />
        <Stack.Screen name = "DetailsAppointmentScreen" component = {DetailsAppointment} />
        <Stack.Screen name = "BookingInvoiceScreen" component = {BookingInvoice} />
    </Stack.Navigator>
  )
}

export default BookStack;