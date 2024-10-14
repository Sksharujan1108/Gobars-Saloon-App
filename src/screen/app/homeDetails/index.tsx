import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import { Constants } from "./constants";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ColorSheet } from "@/utilis/ColorSheet";
import Location from "@/assets/svg/home/tabler-icon-map-pin-filled.svg";
import Message from "@/assets/svg/home/Message.svg";
import Call from "@/assets/svg/home/Call.svg";
import Direction from "@/assets/svg/home/Location.svg";
import Share from "@/assets/svg/home/Share.svg";
import MobileOptionCard from "@/component/homeDetails/optionCard";
import SpecialistCard from "@/component/homeDetails/specialistCard";
import PrimaryButton from "@/component/button/PrimaryButton";

const HomeDetails = () => {
  return (
    <View style={styles.root}>
      {/* Status Bar */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor={"translucent"}
        translucent={true}
      />
      <View
        style = {{
            flex: 1,
        }}
      >
      <ScrollView
        contentContainerStyle = {styles.scrollView_container}
        showsVerticalScrollIndicator = {false}
      >
      <View style={styles.main_container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://media.istockphoto.com/id/627788040/photo/hairdresser-doing-hairstyle.jpg?s=612x612&w=0&k=20&c=iW5aZnfj7RFfxib7r2MX62SHIAUn2x6_Klu6XFze1uY=",
          }}
        />
        {/* Details Container */}
      <View style={styles.details_container}>
          {/* Header */}
          <View style={styles.header_row_container}>
            <Text style={styles.header_text}>{Constants.HEADER}</Text>
            <TouchableOpacity style={styles.open_container} activeOpacity={0.5}>
              <Text style={styles.open}>{Constants.OPEN}</Text>
            </TouchableOpacity>
          </View>
          {/* location */}
          <View style={styles.row_container}>
            <Location />
            <Text style={styles.location_text}>{Constants.LOCATION}</Text>
          </View>
          {/* points */}
          <View style={styles.row_container}>
            {/* Icon */}
            <AntDesign name="star" size={16} color={ColorSheet.Secondary} />
            <Text style={styles.review_text}>{Constants.REVIEW}</Text>
          </View>

          {/* Option Card */}
          <View style={styles.option_card_container}>
            <MobileOptionCard
              child={<Message />}
              title={Constants.MESSAGE}
              onPress={() => {}}
            />
            {/* Call */}
            <MobileOptionCard
              child={<Call />}
              title={Constants.CALL}
              onPress={() => {}}
            />
            {/* Direction */}
            <MobileOptionCard
              child={<Direction />}
              title={Constants.DIRECTION}
              onPress={() => {}}
            />
            {/* Share */}
            <MobileOptionCard
              child={<Share />}
              title={Constants.SHARE}
              onPress={() => {}}
            />
          </View>

          {/* Our Our Specialist */}
          <View style={styles.specialist_container}>
            {/* row container  */}
            <View style={styles.specialist_row_container}>
              <Text style={styles.specialist_text}>{"Our Specialist"}</Text>
              <Text style={styles.see_all_text}>{"See All"}</Text>
            </View>
            {/* data */}
            <SpecialistCard
              data={listData}
            />
          </View>

          {/* Button */}
          <PrimaryButton
            title = {'Book Now'}
            onPress = {() => {}}
          />
      </View>

      </View>
      </ScrollView>
      </View>
    </View>
  );
};

export default HomeDetails;

const listData = [
    {
        id: 1,
        image: 'https://www.shutterstock.com/image-photo/man-getting-haircut-hair-stylist-600nw-2075358466.jpg',
        name: 'A. Walker',
        service: 'Sr. Barber',
    },
    {
        id: 2,
        image: 'https://img.freepik.com/premium-photo/hairstylist-trimming-hair-customer-beauty-salon_53876-148538.jpg',
        name: 'N. Patel',
        service: 'Hair Stylist',
    },
    {
        id: 3,
        image: 'https://img.freepik.com/premium-photo/hairstylist-using-shampoo-cap-customer_943281-45882.jpg',
        name: 'A. Walker',
        service: 'Sr. Barber',
    },
    {
        id: 4,
        image: 'https://img.freepik.com/premium-photo/getting-his-hair-done-beauty-salon-european-style_943281-45550.jpg',
        name: 'A. Walker',
        service: 'Sr. Barber',
    }
]
