import React from 'react'
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native'
import SquareArrowRightUp from '@/assets/svg/home/SquareArrowRightUp.svg'
import { styles } from './styles';

interface SeeAllButtonProps {
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
};
const SeeAllButton = (props: SeeAllButtonProps) => {
    const { onPress } = props;
    return (
        <TouchableOpacity
        style = {styles.seeAllBtn}
        activeOpacity = {0.4}
        onPress = {onPress}
      >
        <Text style = {styles.seeAllText}> {'See All'} </Text>
        {/* SquareArrowRightUp SVG */}
        <SquareArrowRightUp/>
      </TouchableOpacity>
    )
}

export default SeeAllButton;
