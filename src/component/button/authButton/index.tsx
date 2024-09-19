import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { TextProps } from 'react-native-svg';
import Google from '@/assets/svg/Login/google.svg';
import FaceBook from '@/assets/svg/Login/Facebook.svg';

interface authButtonProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    type?: 'google' | 'faceBook'
}

const AuthButton = (props: authButtonProps) => {
    const {
        style,
        title,
        onPress,
        textStyle,
        type,
    } = props;

  return (
    <TouchableOpacity
      style = {[styles.button_root, style]}
      onPress = {onPress}
      activeOpacity = {0.5}
    >
      {type == ITEM_TYPE.GOOGLE && (
        <Google/>
      )}

      {type == ITEM_TYPE.FACEBOOK && (
        <FaceBook/>
      )}

      <Text style = {[styles.title_txt, textStyle]}> {title} </Text>
    </TouchableOpacity>
  )
}

export default AuthButton;

const ITEM_TYPE = {
  GOOGLE: 'google',
  FACEBOOK: 'faceBook',
}