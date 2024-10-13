import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles';
import BackTitleHeader from '@/component/backTitleHeader';
import MobileCustomCalender from '@/component/customeCalender';

const BookAppointment = () => {
  return (
    <View style = {styles.root}>
      {/* Status Bar */}
      <StatusBar
        barStyle = 'dark-content'
        backgroundColor={'translucent'}
        translucent={true}
      />

      {/* Back Title */}
      <BackTitleHeader
        title = {'Book Appointment'}
        onPress={() => {}}
      />

      {/* Scroll View */}
      <ScrollView
        contentContainerStyle = {styles.scrollView}
      >
        {/* Main Container */}
        <View style = {styles.main_container}>
          {/* Choose Date */}
          <Text style = {styles.choose_date_text}>{'Choose Date'}</Text>
          {/* calender */}
          <MobileCustomCalender/>
        </View>

      </ScrollView>
    </View>
  )
}

export default BookAppointment;