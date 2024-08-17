import { FlatList, Image, ImageProps, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ColorSheet } from "@/utilis/ColorSheet";

interface NearestBarShopListProps {
  data: 
    {
      image: ImageProps;
      barName: string;
      location: string;
      points: number;
    }[],
}

const NearestBarShopList = (props: NearestBarShopListProps) => {
  const { data } = props;
  return (
    <View style={styles.root}>
      <FlatList
        nestedScrollEnabled
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style = {styles.container}>
            {/* Image */}
            <Image
              style={styles.imageStyle}
              source={item?.image}
            />
            {/* column Container */}
            <View style = {styles.columnContainer}>
              {/* Bar Name */}
              <Text style={styles.barName}>{item.barName} </Text>
              {/* Icon & Location */}
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

              {/* Icon & Points Like  */}
              <View style={styles.rowContainer}>
                {/* Icon */}
                <AntDesign 
                  name="star" 
                  size={22} 
                  color={ColorSheet.IconColor}  
                />
                {/* Points Like */}
                <Text style={styles.points}> {item?.points} </Text>
              </View>
            </View>

          </View>
        )}
      />
    </View>
  );
};

export default NearestBarShopList;
