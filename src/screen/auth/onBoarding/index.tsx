import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useState } from "react";
import { styles } from "./styles";
import Swiper from "react-native-swiper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ColorSheet } from "@/utilis/ColorSheet";

const OnBoarding = () => {
  const [data, setData] = useState(pages);

  const RenderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <View style={styles.container}>
        {/* Swiper */}
        <Swiper 
          style={styles.wrapper}
        >
          {/* Image 1 */}
          <View style={styles.slide}>
            <Image style={styles.imageStyle} source={item?.imageUri} />

            <View style={styles.bottomView}>
              {/* Title */}
              <Text style={styles.bottomTitle}> {item?.title} </Text>
              {/* SubTitle */}
              <Text style={styles.bottomSubtitle}> {item?.subtitle} </Text>
              {/* Dots */}
              <View style = {styles.rowDotsContainer}>
                {data.map((_, idx) => (
                  <View
                  key={index}
                  style={[
                    styles.dots,
                    { 
                      backgroundColor: index !== idx ? ColorSheet.White : ColorSheet.PrimaryButton,
                      width: index == idx ? wp(8) : wp(3),
                    },
                    
                  ]}
                />
                ))}
              </View>
              {/* Button */}
              <TouchableOpacity
                style={styles.getStartedButton}
                onPress={() => {
                  console.log("hi");
                }}
              >
                <Text style={styles.getStartedButtonText}> Get Started </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Swiper>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator = {false}
        bounces = {false}
        data={data}
        renderItem={RenderItem}
        keyExtractor={(item) => item.title} // Unique key based on title
      />
    </View>
  );
};

export default OnBoarding;

const pages = [
  {
    title: "Welcome Gobars",
    subtitle: `Find the best grooming experience in your city with just one tap! Don't miss out on the haircut or treatment of your dreams. Let's start now!`,
    imageUri: require("@/assets/image/onBoarding/Picture01.png"),
  },
  {
    title: "Loooking for barber?",
    subtitle:
      "Find the best barbershop around you in seconds, make an appointment, and enjoy the best grooming experience.",
    imageUri: require("@/assets/image/onBoarding/Picture02.png"),
  },
  {
    title: "Everything in your hands",
    subtitle: `With Gobar, find high-quality barbershops, see reviews, and make appointments easily. Achieve your confident appearance!`,
    imageUri: require("@/assets/image/onBoarding/Picture03.png"),
  },
];
