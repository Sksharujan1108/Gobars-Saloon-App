import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import BackTitleHeader from "@/component/backTitleHeader";
import { Constants } from "./constants";
import HomeCommonListData from "@/component/home/HomeCommonListData";
import Calendar from "@/assets/svg/book/Calendar.svg";
import ServiceListShowCard from "@/component/bookComponent/serviceListShowCard";
import Scissors from "@/assets/svg/book/Scissors.svg";
import PrimaryButton from "@/component/button/PrimaryButton";
import Wallet from "@/assets/svg/book/Wallet Money.svg";
import { ColorSheet } from "@/utilis/ColorSheet";
import Coupon from "@/assets/svg/book/coupon.svg";
import MobileCustomPayment from "@/component/bookComponent/customePayment";
import MobileAppointmentCustomPayment from "@/component/bookComponent/appointmentCustomePayment";

const DetailsAppointment = () => {
  const [coupon, setCoupon] = useState("");

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
        {/* Back Title */}
        <BackTitleHeader
          title={Constants.HEADER_TITLE}
          textStyle={styles.header_style}
          svgColor="white"
          onPress={() => {}}
        />

        <View style={styles.service_Card}>
          {/* Service */}
          <HomeCommonListData
            containerStyle={styles.data_container_style}
            data={serviceData}
          />
        </View>
        {/* white container */}
        <View style={styles.white_container}>
          <View style={styles.row_container}>
            <Calendar width={20} height={20} />
            <Text style={styles.common_title_text}>{Constants.DATE_TIME}</Text>
          </View>
          {/* Today Date */}
          <View style={styles.row_container}>
            <Text style={styles.today_date_time_text}>{dateTime?.date}</Text>
            <Text style={styles.today_date_time_text}>-</Text>
            <Text style={styles.today_date_time_text}>{dateTime?.time}</Text>
          </View>

          {/* Service List */}
          <View style={styles.service_list_container}>
            <View style={styles.row_container}>
              <Scissors width={20} height={20} />
              <Text style={styles.common_title_text}>
                {Constants.SERVICE_LIST}
              </Text>
            </View>
            <ServiceListShowCard data={serviceList} />
          </View>

          {/* Apply Coupon */}
          <View style={styles.apply_coupon_container}>
            <Text style={styles.common_title_text}>
              {Constants.APPLY_COUPON}
            </Text>
            <View style={styles.input_button_row_container}>
              <View style={styles.coupon_card_input_row_container}>
                <Coupon />
                <TextInput
                  style={styles.input_container}
                  placeholder={Constants.ENTER_COUPON}
                  placeholderTextColor={ColorSheet.Text2}
                  value={coupon}
                  onChangeText={(text) => setCoupon(text)}
                />
              </View>
              {/* Apply Button */}
              <PrimaryButton
                style={styles.apply_button_container}
                title="Apply"
                onPress={() => {}}
              />
            </View>
          </View>

          {/* Payment */}
          <MobileAppointmentCustomPayment data={totalPayment} />

          {/* Button */}
          <PrimaryButton
            title={Constants.PAY_NOW}
            onPress={() => {
              console.log("pay now");
            }}
            child={<Wallet width={22} height={22} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsAppointment;

const serviceData = [
  {
    image: require("@/assets/image/Home/homeBar_Pic.png"),
    barName: "Captain Barbershop",
    location: "123 Main Street, Anytown, USA",
    points: 4.5,
  },
];

const dateTime = {
  date: "Sun, 15 Jan",
  time: "08.00 AM",
};

const serviceList = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/originals/39/82/1d/39821dfd3fece681b537dcee8fae986f.jpg",
    title: "Basic haircut",
    service: "Basic haircut & vitamint",
    price: 400,
  },
  {
    id: 2,
    image:
      "https://trueessenceskin.ca/wp-content/uploads/2021/07/main-picture-indian-head-massage-1170x694.jpg",
    title: "Massage",
    service: "Extra massage",
    price: 500,
  },
  {
    id: 3,
    image:
      "https://bespokeunit.com/wp-content/uploads/2017/05/A-Man-Getting-Beard-Trim-At-Barber-Shop-July-2017.jpg",
    title: "Basic haircut",
    service: "Haircut",
    price: 450,
  },
];

const totalPayment = {
  serviceList: [
    {
      id: 1,
      service: "Basic Hair Cut",
      price: 400,
    },
    {
      id: 2,
      service: "Hair Coloring",
      price: 200,
    },
  ],
  couponDiscount: "-50",
  totalServicePrice: 550,
};
