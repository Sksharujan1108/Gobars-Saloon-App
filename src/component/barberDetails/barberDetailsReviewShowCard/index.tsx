import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import UnClickReview from "@/assets/svg/details/UnclickStar.svg";

interface BarberDetailsReviewShowCardProps {
  data: {
    id: number;
    image: any;
    name: string;
    review: string;
    description: string;
  }[];
}

const BarberDetailsReviewShowCard = (
  props: BarberDetailsReviewShowCardProps
) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      {data?.map((item, index) => {
        return (
          <View style={styles.list_card_container}>
            <View
              style={{
                flexDirection: "row",
                // alignItems: "center",
                gap: 15,
              }}
            >
              <Image style={styles.image_style} source={{ uri: item?.image }} />
              <View style={styles.text_container}>
                <Text style={styles.title}>{item?.name}</Text>
                <View style={styles.star_container}>
                  <UnClickReview />
                  <Text style={styles.review}>{item?.review}</Text>
                </View>
                <Text style={styles.service}>{item?.description}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default BarberDetailsReviewShowCard;
