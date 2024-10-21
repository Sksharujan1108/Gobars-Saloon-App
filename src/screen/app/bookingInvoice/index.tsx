import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import BackTitleHeader from "@/component/backTitleHeader";
import SuccessFull from "@/assets/svg/book/SuccessFullSvg.svg";
import PrimaryButton from "@/component/button/PrimaryButton";
import Download from "@/assets/svg/book/Cloud Download.svg";
import MobileAppointmentCustomPayment from "@/component/bookComponent/appointmentCustomePayment";
import { Constants } from "./constants";

const BookingInvoice = () => {
  return (
    <SafeAreaView style={styles.root}>
      {/* Status Bar */}
      <StatusBar
        barStyle="light-content"
        backgroundColor={"translucent"}
        translucent={true}
      />
     <ScrollView
        contentContainerStyle={styles.scrollView_container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.success_main_card_container}>
          {/* Back Title */}
          <BackTitleHeader
            title={Constants.HEADER_TITLE}
            textStyle={styles.header_style}
            svgColor="white"
            onPress={() => {}}
          />

          {/* Success Message */}
          <View style={styles.success_card}>
            <SuccessFull />
            <Text style={styles.success_text}>
              {Constants.BOOKING_SUCCESSFULLY}
            </Text>
            <Text style={styles.sub_title_text}>{Constants.SUB_TITLE}</Text>
          </View>
        </View>

        {/* White Container */}
        <View style={styles.white_container}>
          {/* Shop Info */}
          <View style={styles.row_container}>
            <Text style={styles.shop_title}>{data.barName}</Text>
            <Text style={styles.common_text}>{data.date}</Text>
          </View>
          <Text style={styles.common_text}>{data.service}</Text>

          {/* Payment Details */}
          <MobileAppointmentCustomPayment data={totalPayment} />

          {/* Buttons */}
          <View style={styles.button_container}>
            <PrimaryButton
              style={styles.back_button}
              title={Constants.BACK_BUTTON}
              onPress={() => {
                console.log("Back pressed");
              }}
            />
            <TouchableOpacity
              style={styles.download_button}
              activeOpacity={0.5}
              onPress={() => {
                console.log("Download pressed");
              }}
            >
              <Text>{Constants.DOWNLOAD_BUTTON}</Text>
              <Download />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
     </SafeAreaView>
  );
};

export default BookingInvoice;

const data = {
  barName: "Master piece Barbershop..",
  service: "Basic haircut , Massage",
  date: "Sun, 15 Jan",
};

const totalPayment = {
  serviceList: [
    { id: 1, service: "Basic Hair Cut", price: 400 },
    { id: 2, service: "Hair Coloring", price: 200 },
    { id: 3, service: "Massage", price: 200 },
  ],
  couponDiscount: "-50",
  totalServicePrice: 550,
};
