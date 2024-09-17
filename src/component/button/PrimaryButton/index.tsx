import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { TextProps } from 'react-native-svg';

interface PrimaryButton {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

const PrimaryButton = (props: PrimaryButton) => {
    const {
        style,
        title,
        onPress,
        textStyle,
    } = props;

  return (
    <TouchableOpacity
      style = {[styles.button_root, style]}
      onPress = {onPress}
      activeOpacity = {0.5}
    >
      <Text style = {[styles.title_txt, textStyle]}> {title} </Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton;