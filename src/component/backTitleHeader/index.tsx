import { GestureResponderEvent, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { styles } from './styles';
import BackArrowSvg from '@/assets/svg/book/BackArrow.svg';

interface BackTitleHeaderProps {
    title?: string;
    svgColor?: string; // New prop for color
    textStyle?: StyleProp<TextStyle>;
    onPress?: ((e: GestureResponderEvent) => void)
}

const BackTitleHeader = (props: BackTitleHeaderProps) => {
  const { title, svgColor, textStyle, onPress } = props;
  return (
    <View style = {styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
      >
        <BackArrowSvg
          stroke={svgColor} // Pass color to the SVG
        />
      </TouchableOpacity>
      <Text style = {[styles.title_text, textStyle]}>{title}</Text>
    </View>
  )
}

export default BackTitleHeader;