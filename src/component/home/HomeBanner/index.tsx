import { Text, Image, View, TouchableOpacity, GestureResponderEvent } from 'react-native'
import React from 'react'
import { styles } from './styles';

interface HomeBannerProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const HomeBanner = (props: HomeBannerProps) => {
  const {
    onPress
  } = props;
  return (
    <View style = {styles.rootContainer}>
          {/* BackGround */}
        <Image
          style = {styles.imgBackground}
          source={require('@/assets/image/Home/Home_GbCard.png')}
        />

        <Image
          style = {styles.imgLogoPic}
          source={require('@/assets/image/Home/LOGOGOBAR.png')}
        />

        <Image
          style = {styles.imgPic}
          source={require('@/assets/image/Home/HomePICT.png')}
        />

        <TouchableOpacity
          style = {styles.btnContainer}
          activeOpacity = {0.6}
          onPress = {onPress}
        >
            <Text style = {styles.btnText}> {'Booking Now'} </Text>
        </TouchableOpacity>
        </View>
  )
}

export default HomeBanner;