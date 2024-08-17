import { Image, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";

const MobileTopHeader = () => {
  return (
    <View style={styles.root}>
      <View style = {styles.locationNameContainer}>
        <View style={styles.iconContainer}>
          {/* Icon */}
          <Ionicons name="location-sharp" size={24} color="black" />
          {/* Location */}
          <Text style={styles.location}> {"Chunnkam"} </Text>
        </View>
        {/* User Name */}
        <Text style={styles.userName}> {"Sk Sharujan"} </Text>
      </View>
      {/* User Profile */}
      <Image
        style={styles.imgStyle}
        source={{
          uri: "https://s.ndtvimg.com/images/entities/300/virat-kohli-967.png",
        }}
      />
    </View>
  );
};

export default MobileTopHeader;
