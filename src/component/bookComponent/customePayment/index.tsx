import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import HorizontalLine from '@/assets/svg/book/Sparator.svg'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

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
      <HorizontalLine 
       style={styles.dashed_horizontal_line} 
       height={2}
      />
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
