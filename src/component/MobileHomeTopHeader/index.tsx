import { Image, Text, View } from "react-native";
import React from "react";
import Location from '@/assets/svg/home/map-pin.svg';
import Notification from '@/assets/svg/home/notification.svg';
import { styles } from "./styles";

interface homeTopHeaderProps {
  name?: string
  location?: string
}

const MobileHomeTopHeader = (props: homeTopHeaderProps) => {
  const { name, location } = props;
  return (
    <View style={styles.root}>
      <View style = {styles.locationNameContainer}>
        {/* User Name */}
        <Text style={styles.userName}>{'Hi,'}{name} </Text>
        <View style={styles.iconContainer}>
          {/* Icon */}
          <Location/>
          {/* Location */}
          <Text style={styles.location}> {location} </Text>
        </View>
      </View>
      {/* User Profile */}
      <View style = {styles.notification_container}>
        {/* Notification */}
        <Notification/>
      </View>
    </View>
  );
};

export default MobileHomeTopHeader;
