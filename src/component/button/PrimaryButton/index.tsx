import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { TextProps } from 'react-native-svg';

interface PrimaryButtonProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    child?: React.ReactNode; // Add this if you want to include a child component inside the button.
}

const PrimaryButton = (props: PrimaryButtonProps) => {
    const {
        style,
        title,
        onPress,
        textStyle,
        child,
    } = props;

  return (
    <TouchableOpacity
      style = {[styles.button_root, style]}
      onPress = {onPress}
      activeOpacity = {0.5}
    >
      <Text style = {[styles.title_txt, textStyle]}> {title} </Text>
      {child && (
        child // Add this if you want to include a child component inside the button.
      )}
    </TouchableOpacity>
  )
}

export default PrimaryButton;