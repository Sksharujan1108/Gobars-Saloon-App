import React, { useEffect, useRef } from 'react';
import { Text, TouchableOpacity, Animated } from 'react-native';
import { styles } from './styles';

interface AnimatedBottomViewProps {
    title?: string;
    subTitle?: string;
    onGetStarted: () => void;
}

const AnimatedBottomView = (props: AnimatedBottomViewProps) => {
    const {
        title,
        subTitle,
        onGetStarted
    }  = props
  const slideAnim = useRef(new Animated.Value(100)).current; // Initial position is offscreen

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0, // Slide up to visible position
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
    <Animated.View
      style={[
        styles.bottomView,
        {
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      {/* Title */}
      <Text style={styles.bottomTitle}> {title} </Text>
      {/* SubTitle */}
      <Text style={styles.bottomSubtitle}>
        {subTitle}
      </Text>
      {/* Button */}
      <TouchableOpacity 
        style={styles.getStartedButton}
        onPress = {onGetStarted}
        >
        <Text style={styles.getStartedButtonText}> Get Started </Text>
      </TouchableOpacity>
      
    </Animated.View>
  );
};

export default AnimatedBottomView;
