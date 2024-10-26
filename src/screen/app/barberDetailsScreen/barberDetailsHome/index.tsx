import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import BackTitleHeader from "@/component/backTitleHeader";
import Location from "@/assets/svg/home/tabler-icon-map-pin-filled.svg";
import AntDesign from "@expo/vector-icons/AntDesign";
import TouchableClickSvgTitle from "@/component/touchableClickSvgTitle";
import Chat from "@/assets/svg/home/Chat Round Unread.svg";
import Share from "@/assets/svg/home/Share.svg";
import Favorite from "@/assets/svg/home/Heart.svg";
import ClickAbout from "@/assets/svg/details/ClickAbout.svg";
import ClickService from "@/assets/svg/details/ClickScissors.svg";
import ClickSchedule from "@/assets/svg/details/ClickCalendarMark.svg";
import ClickReview from "@/assets/svg/details/ClickStar.svg";
//
import UnClickAbout from "@/assets/svg/details/UnclickAbout.svg";
import UnClickService from "@/assets/svg/details/UnClickScissors.svg";
import UnClickSchedule from "@/assets/svg/details/UnClickCalendarMark.svg";
import UnClickReview from "@/assets/svg/details/UnclickStar.svg";
import BarberDetailsAbout from "../barberDetailsAbout";
import BarberDetailsService from "../barberDetailsService";
import BarberDetailsSchedule from "../barberDetailsSchedule";
import BarberDetailsReview from "../barberDetailsReview";

const BarberDetailsHome = () => {
  const [activeTab, setActiveTab] = useState(ITEM_LIST.About);
  return (
    <SafeAreaView style={styles.rootContainer}>
      {/* Status Bar */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor={"translucent"}
        translucent={true}
      />
      {/* Back Header */}
      <BackTitleHeader title="Detail Barber" onPress={() => {}} />
      {/* Scroll View */}
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.main_container}>
          {/* Image */}
          <View style={styles.image_container}>
            <Image
              style={styles.imageStyle}
              source={{
                uri: "https://www.statecollegeofbeauty.com/wp-content/uploads/2023/11/Picture1.jpg",
              }}
            />
            <TouchableOpacity
              style={styles.image_open_button_style}
              activeOpacity={0.5}
              onPress={() => {}}
            >
              <Text style={styles.open_button_text}>Open</Text>
            </TouchableOpacity>
          </View>
          {/* header */}
          <View style={styles.service_row_container}>
            <Text style={styles.header_text}>
              {"Master piece Barbershop "} -{" "}
            </Text>
            <Text style={styles.service_text}>{"Haircut styling"}</Text>
          </View>
          {/* location */}
          <View style={styles.row_container}>
            <Location fill={"#8683A1"} />
            <Text style={styles.location_text}>
              {"Joga Expo Centre  (2 km)"}
            </Text>
          </View>
          {/* points */}
          <View style={styles.row_container}>
            {/* Icon */}
            <AntDesign name="star" size={16} color={"#8683A1"} />
            <Text style={styles.review_text}>
              {"5.0"} {"(20)"}
            </Text>
          </View>
          {/* options */}
          <View style={styles.option_row_container}>
            <TouchableClickSvgTitle
              child={<Chat />}
              title="Chat"
              onPress={() => {}}
            />
            <TouchableClickSvgTitle
              child={<Share />}
              title="Share"
              onPress={() => {}}
            />
            <TouchableClickSvgTitle
              child={<Favorite />}
              title="Favorite"
              onPress={() => {}}
            />
          </View>
        </View>

        {/* Switch Button */}
        <View style={styles.switch_container}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontal_button_scroll}
          >
            {/* About */}
            <TouchableOpacity
              style={[
                styles.common_switch_button_container,
                activeTab === ITEM_LIST.About &&
                  styles.common_switch_button_active,
              ]}
              activeOpacity={0.5}
              onPress={() => {
                setActiveTab(ITEM_LIST.About);
              }}
            >
              {activeTab == ITEM_LIST.About ? <ClickAbout /> : <UnClickAbout />}
              <Text
                style={[
                  styles.common_switch_button_text,
                  activeTab === ITEM_LIST.About &&
                    styles.common_switch_button_text_active,
                ]}
              >
                About
              </Text>
            </TouchableOpacity>
            {/* service */}
            <TouchableOpacity
              style={[
                styles.common_switch_button_container,
                activeTab === ITEM_LIST.Service &&
                  styles.common_switch_button_active,
              ]}
              activeOpacity={0.5}
              onPress={() => {
                setActiveTab(ITEM_LIST.Service);
              }}
            >
              {activeTab == ITEM_LIST.Service ? (
                <ClickService />
              ) : (
                <UnClickService />
              )}
              <Text
                style={[
                  styles.common_switch_button_text,
                  activeTab === ITEM_LIST.Service &&
                    styles.common_switch_button_text_active,
                ]}
              >
                Service
              </Text>
            </TouchableOpacity>
            {/* schedule */}
            <TouchableOpacity
              style={[
                styles.common_switch_button_container,
                activeTab === ITEM_LIST.Schedule &&
                  styles.common_switch_button_active,
              ]}
              activeOpacity={0.5}
              onPress={() => {
                setActiveTab(ITEM_LIST.Schedule);
              }}
            >
              {activeTab == ITEM_LIST.Schedule ? (
                <ClickSchedule />
              ) : (
                <UnClickSchedule />
              )}
              <Text
                style={[
                  styles.common_switch_button_text,
                  activeTab === ITEM_LIST.Schedule &&
                    styles.common_switch_button_text_active,
                ]}
              >
                Schedule
              </Text>
            </TouchableOpacity>
            {/* review */}
            <TouchableOpacity
              style={[
                styles.common_switch_button_container,
                activeTab === ITEM_LIST.Review &&
                  styles.common_switch_button_active,
              ]}
              activeOpacity={0.5}
              onPress={() => {
                setActiveTab(ITEM_LIST.Review);
              }}
            >
              {activeTab == ITEM_LIST.Review ? (
                <ClickReview />
              ) : (
                <UnClickReview />
              )}
              <Text
                style={[
                  styles.common_switch_button_text,
                  activeTab === ITEM_LIST.Review &&
                    styles.common_switch_button_text_active,
                ]}
              >
                Review
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        {/* Tab Content */}
        {activeTab == ITEM_LIST.About && <BarberDetailsAbout />}
        {activeTab == ITEM_LIST.Service && <BarberDetailsService />}
        {activeTab == ITEM_LIST.Schedule && <BarberDetailsSchedule />}
        {activeTab == ITEM_LIST.Review && <BarberDetailsReview />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BarberDetailsHome;

const ITEM_LIST = {
  About: "About",
  Service: "Service",
  Schedule: "Schedule",
  Review: "Review",
};
