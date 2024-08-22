import {
  FlatList,
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import Carousel from "react-native-reanimated-carousel";
import { styles } from "./styles";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import CalendarMark from "@/assets/svg/home/CalendarMark.svg";
import { Constants } from "./constants";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ColorSheet } from "@/utilis/ColorSheet";

interface MostRecommendedImageSliderProps {
  
}

const MostRecommendedImageSlider = (props: MostRecommendedImageSliderProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const onSnapToItem = useCallback((index: number) => {
    setActiveSlide(index);
  }, []);

  const data = [
    {
      imageSource: require("@/assets/image/Home/MostRecommended/Banner/HomePic2.png"),
      barName: "Master piece Barbershop - Haircut styling",
      location: "Banguntapan (5 km)",
      points: 4.5,
    },
    {
      imageSource: require("@/assets/image/Home/MostRecommended/Banner/HomePic2.png"),
      barName: "Alana Barbershop - Haircut massage & Spa ",
      location: "Banguntapan (5 km)",
      points: 4.5,
    },
    {
      imageSource: require("@/assets/image/Home/MostRecommended/Banner/HomePic2.png"),
      barName: "Barberman - Haircut styling & massage",
      location: "J-Walk Centre  (17 km)",
      points: 4.7,
    },
  ];

  return (
    <View style={styles.root}>
      <Carousel
        loop
        width={wp(100)}
        height={hp(40)}
        autoPlay
        autoPlayInterval={4000}
        data={data}
        scrollAnimationDuration={1000}
        renderItem={({ item, index }) => (
          <View
            style = {{
              marginTop: 10,
              // marginBottom: 10,
            }}
          >
            <View style={styles.Container}>
              <Image style={styles.imgStyle} source={item.imageSource} />

              <TouchableOpacity
                style={styles.bookingBtn}
                activeOpacity={0.8}
                onPress={() => {
                  console.log("Booking");
                }}
              >
                <Text style={styles.bookingText}>{Constants.BOOKING}</Text>
                <CalendarMark />
              </TouchableOpacity>
            </View>
            <View style = {styles.textContainer}>
              <Text style={styles.barName}>{item.barName}</Text>

              <View style={styles.rowContainer}>
                <Entypo
                  name="location-pin"
                  size={24}
                  color={ColorSheet.IconColor}
                />
                <Text style={styles.location}> {item.location}</Text>
              </View>

              <View style={styles.rowContainer}>
                <AntDesign name="star" size={22} color={ColorSheet.IconColor} />
                <Text style={styles.points}> {item.points}</Text>
              </View>
            </View>
          </View>
        )}
        onSnapToItem={onSnapToItem}
      />

      <FlatList
        style={styles.pagination}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View key={index} style={activeSlide === index ? styles.active_dot : styles.dot} />
        )}
      />
    </View>
  );
};

export default MostRecommendedImageSlider;
