import { Image, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import AnimatedBottomView from "../animation/AnimationBottom";
import { styles } from "./styles";

interface SwiperProps {
  dotsTotal?: number;
  currentIndex?: number;
  dotsColor?: StyleProp<ViewStyle>,
  titleHeader?: string;
  subTitleHeader?: string;
  imgSource?: any;
  onGetStarted: () => void;
}
const SwiperComponent = (props: SwiperProps) => {
  const { dotsTotal, currentIndex, dotsColor, titleHeader, subTitleHeader, imgSource, onGetStarted } = props;
  return (
    <View style={styles.root}>
      {/* Swiper */}
      <Swiper style={styles.wrapper} showsButtons={true}>
        {/* Image 1 */}
        <View style={styles.slide}>
          <Image style={styles.imageStyle} source={imgSource} />

          <View style = {styles.bottomView}>
            {/* Title */}
            <Text style={styles.bottomTitle}> {titleHeader} </Text>
            {/* SubTitle */}
            <Text style={styles.bottomSubtitle}> {subTitleHeader} </Text>
            {/* Dots */}
            <View>
            {Array.from({ length: dotsTotal }).map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dots,
                    { backgroundColor: index === currentIndex ? 'white' : '#363062' }
                  ]}
                />
              ))}
            </View>
            {/* Button */}
            <TouchableOpacity
              style={styles.getStartedButton}
              onPress={onGetStarted}
            >
              <Text style={styles.getStartedButtonText}> Get Started </Text>
            </TouchableOpacity>
          </View>

        </View>
      </Swiper>
    </View>
  );
};

export default SwiperComponent;
