import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles';

const MobileCustomCalender = () => {
    const [selectedDate, setSelectedDate] = useState('');
  return (
    <View style = {styles.container}>
      <Text>MobileCustomCalender</Text>
    </View>
  )
}

export default MobileCustomCalender;