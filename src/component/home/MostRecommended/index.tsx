import {
  FlatList,
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import CalendarMark from "@/assets/svg/home/CalendarMark.svg";
import { Constants } from "./constants";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ColorSheet } from "@/utilis/ColorSheet";

interface MostRecommendedBannerProps {
  data: {
    imageSource?: ImageProps;
    barName?: string;
    location?: string;
    points?: number;
  }[];
}

const MostRecommendedBanner = (props: MostRecommendedBannerProps) => {
  const { data } = props;
  return (
    <View style={styles.root}>
      <FlatList
        data={data}
        horizontal
        contentContainerStyle = {{
          gap: 10
        }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.Container}>
            <View style={styles.imageContainer}>
              <Image style={styles.imgStyle} source={item.imageSource} />

              {/* Booking Btn*/}
              <TouchableOpacity
                style={styles.bookingBtn}
                activeOpacity={0.8}
                onPress={() => {
                  console.log("Booking");
                }}
              >
                <Text style={styles.bookingText}> {Constants.BOOKING} </Text>
                {/* CalendarMark SVG */}
                <CalendarMark />
              </TouchableOpacity>
            </View>

            {/* Bar Name */}
            <Text style={styles.barName}>{item.barName} </Text>

            {/* Icon Location */}
            <View style={styles.rowContainer}>
              {/* Icon */}
              <Entypo
                name="location-pin"
                size={24}
                color={ColorSheet.IconColor}
              />
              {/* Location Name */}
              <Text style={styles.location}> {item?.location} </Text>
            </View>

            {/* Icon Points */}
            <View style={styles.rowContainer}>
              {/* Icon */}
              <AntDesign name="star" size={22} color={ColorSheet.IconColor} />
              {/* Points Like */}
              <Text style={styles.points}> {item?.points}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default MostRecommendedBanner;
