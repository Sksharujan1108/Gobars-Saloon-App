import { FlatList, Image, ImageProps, StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import React from "react";
import { styles } from "./styles";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ColorSheet } from "@/utilis/ColorSheet";

interface HomeCommonListDataProps {
  data: 
    {
      image: ImageProps;
      barName: string;
      location: string;
      points: number;
    }[],
  containerStyle?: StyleProp<ViewStyle>;
}

const HomeCommonListData = (props: HomeCommonListDataProps) => {
  const { data, containerStyle } = props;
  return (
    <View style={styles.root}>
      <FlatList
        nestedScrollEnabled
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style = {[styles.container, containerStyle]}
            activeOpacity={0.6}  // TouchableOpacity's activeOpacity
            onPress={() => {
              console.log('Item Clicked')
            }}  // Function to call when item is clicked
          >
            {/* Image */}
            <View style = {styles.imageContainer}>
                <Image
                  style={styles.imageStyle}
                  source={item?.image}
                />
            </View>
            {/* column Container */}
            <View style = {styles.columnContainer}>
              {/* Bar Name */}
              <Text style={styles.barName}>{item.barName} </Text>
              {/* Icon & Location */}
              <View style={styles.rowContainer}>
                {/* Location Name */}
                <Text style={styles.location}>{item?.location}</Text>
              </View>

              {/* Icon & Points Like  */}
              <View style={styles.rowContainer}>
                {/* Icon */}
                <AntDesign 
                  name="star" 
                  size={22} 
                  color={ColorSheet.Secondary}  
                />
                {/* Points Like */}
                <Text style={styles.points}> {item?.points} </Text>
              </View>

              {/* Services */}
              <Text style={styles.service_text}>{'Services:'} </Text>
              <View style={styles.service_container}>
                <Text style={styles.service_list_text}>{'Undercut Haircut, Regular Shaving, Natural Hair Wash'} </Text>
              </View>
            </View>

          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeCommonListData;
