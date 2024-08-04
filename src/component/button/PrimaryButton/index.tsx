import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles';

interface PrimaryButton {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    style?: any;
}

const PrimaryButton = (props: PrimaryButton) => {
    const {
        style,
        title,
        onPress,
    } = props;

  return (
    <TouchableOpacity
      style = {[styles.button_root, style]}
      onPress = {onPress}
      activeOpacity = {0.5}
    >
      <Text style = {styles.title_txt}> {title} </Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton;