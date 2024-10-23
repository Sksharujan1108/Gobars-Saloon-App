import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles';

interface TouchableClickSvgTitleProps {
    title: string;
    child: React.ReactNode;
    onPress: ((e: GestureResponderEvent) => void);
}
const TouchableClickSvgTitle = (props: TouchableClickSvgTitleProps) => {
    const { title, child, onPress } = props;
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={onPress}
    >
      {child}
      <Text style={styles.title_style}>{title}</Text>
    </TouchableOpacity>
  )
}

export default TouchableClickSvgTitle;