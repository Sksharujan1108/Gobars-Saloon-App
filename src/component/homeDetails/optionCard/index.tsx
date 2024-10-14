import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles';

interface MobileOptionCardProps {
    child?: React.ReactNode;
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    title: string;
}

const MobileOptionCard = (props: MobileOptionCardProps) => {
    const { child, onPress, title } = props;
  return (
      <TouchableOpacity
        style = {styles.button_container}
        activeOpacity = {0.5}
        onPress={onPress}
      >
        <View style = {styles.image_view_container}>
          {child}
        </View>
        <Text style = {styles.title_text}>{title}</Text>
      </TouchableOpacity>
  )
}

export default MobileOptionCard;