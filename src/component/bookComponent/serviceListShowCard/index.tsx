import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";

interface ServiceListShowCardProps {
  data: {
    id: number;
    image: any;
    title: string;
    service: string;
    price: number;
  }[];
}

const ServiceListShowCard = (props: ServiceListShowCardProps) => {
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
                <Text style={styles.title}>{item?.title}</Text>
                <Text style={styles.service}>{item?.service}</Text>
              </View>
            </View>
            <Text style={styles.price}>
              {"Rs."} {item?.price}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default ServiceListShowCard;
