import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";

interface MobileCustomPaymentProps {
  data: {
    serviceList: {
      id: number;
      service: string;
      price: number;
    }[];
    totalServicePrice: number;
  };
}

const MobileCustomPayment = (props: MobileCustomPaymentProps) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.payment_header_text}>{"Payment"}</Text>
      {/* row */}
      {data?.serviceList?.map((item, index) => {
        return (
          <View key={index} style={styles.row_container}>
            <Text style={styles.service_text}>{item.service}</Text>
            <Text style={styles.price_text}>
              {"Rs."} {Number(item.price).toLocaleString()}
            </Text>
          </View>
        );
      })}
      {/* horizontal line */}
      <View style={styles.dashed_horizontal_line} />
      {/* footer */}
      <View style={styles.row_container}>
        <Text style={styles.total_service_title}>{"Service fee"}</Text>
        <Text style={styles.total_service_price}>
          {"Rs."} {Number(data?.totalServicePrice)?.toLocaleString()}
        </Text>
      </View>
    </View>
  );
};

export default MobileCustomPayment;
