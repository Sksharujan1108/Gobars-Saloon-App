import { GestureResponderEvent, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';
import Back from '@/assets/svg/Logo/back.svg';
import { styles } from './styles';

interface propsType {
  style?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  headerTitle: string;
}

const MobileBackLogoHeader = (props: propsType) => {
  const { onPress, style, headerTitle } = props;

  return (
    <View style={[styles.root, style]}>
      <TouchableOpacity 
        onPress={onPress} 
        activeOpacity={0.4} 
      >
        <Back 
          width = {26}
          height = {26}
        />
      </TouchableOpacity>
      <Text style = {styles.headerText}> {headerTitle} </Text>
    </View>
  );
};

export default MobileBackLogoHeader;
