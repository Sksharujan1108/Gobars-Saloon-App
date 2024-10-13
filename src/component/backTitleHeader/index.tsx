import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles';
import BackArrowSvg from '@/assets/svg/book/BackArrow.svg';

interface BackTitleHeaderProps {
    title?: string;
    onPress?: ((e: GestureResponderEvent) => void)
}

const BackTitleHeader = (props: BackTitleHeaderProps) => {
  const { title, onPress } = props;
  return (
    <View style = {styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
      >
        <BackArrowSvg/>
      </TouchableOpacity>
      <Text style = {styles.title_text}>{title}</Text>
    </View>
  )
}

export default BackTitleHeader;