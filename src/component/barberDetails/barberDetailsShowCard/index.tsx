import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import UnClickReview from "@/assets/svg/details/UnclickStar.svg";

interface BarberDetailsShowCardProps {
  data: {
    id: number;
    image: any;
    name: string;
    service: string;
    review: string;
  }[];
}

const BarberDetailsShowCard = (props: BarberDetailsShowCardProps) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      {data?.map((item, index) => {
        return (
          <View style={styles.list_card_container}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
              }}
            >
              <Image style={styles.image_style} source={{ uri: item?.image }} />
              <View style={styles.text_container}>
                <Text style={styles.title}>{item?.name}</Text>
                <Text style={styles.service}>{item?.service}</Text>
              </View>
            </View>
            <View style={styles.star_container}>
              <UnClickReview />
              <Text style={styles.review}>{item?.review}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default BarberDetailsShowCard;
