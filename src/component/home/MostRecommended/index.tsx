import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import CalendarMark from "@/assets/svg/home/CalendarMark.svg";
import { Constants } from "./constants";

const MostRecommended = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.imgStyle}
        source={require("@/assets/image/Home/HomePic2.png")}
      />

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
  );
};

export default MostRecommended;
