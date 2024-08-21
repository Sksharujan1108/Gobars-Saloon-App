import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MobileTopHeader from "@/component/MobileTopHeader";
import { styles } from "./styles";
import HomeBanner from "@/component/home/HomeBanner";
import SearchInput from "@/component/input/SearchInput";
import Setting from "@/assets/svg/home/settingHome.svg";
import { Constants } from "./constants";
import HomeCommonListData from "@/component/home/HomeCommonListData";
import MostRecommendedBanner from "@/component/home/MostRecommended";
import SeeAllButton from "@/component/button/SeeAllBtn";
import FindLocation from "@/component/home/FindLocation";

const Home = () => {
  const [search, setSearch] = useState("");

  // Function to filter nearest barber shop list
  const filteredNearestBarberShops = nearestBarShopList.filter((item) =>
    item.barName.toLowerCase().includes(search.toLowerCase())
  );

  // Function to filter most recommended list
  const filteredMostRecommended = mostRecommended.filter((item) =>
    item.barName.toLowerCase().includes(search.toLowerCase())
  );

  const [seeAll1, setSeeAll1] = useState(false);

  const [seeAll2, setSeeAll2] = useState(false);

  return (
    <View style={styles.rootContainer}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* MainContainer */}
        <View style={styles.MainContainer}>
          {/* Header */}
          <MobileTopHeader />
          {/* Banner */}
          <HomeBanner
            onPress={() => {
              console.log("Booking Now");
            }}
          />
          {/* Search Component */}
          <View style={styles.searchContainer}>
            {/* Search */}
            <SearchInput
              placeholder={Constants.SEARCH}
              value={search}
              onChangeText={(text: any) => {
                setSearch(text);
              }}
              onPressClose={() => {
                setSearch("");
              }}
            />

            {/* Filter */}
            <TouchableOpacity
              style={styles.fliterBtn}
              activeOpacity={0.5}
              onPress={() => {
                console.log("Filter");
              }}
            >
              <Setting />
            </TouchableOpacity>
          </View>

          {/* Bar List Nearest Barber Shop*/}
          <NearestBarberShop />

          {/* See All Button 1*/}
          <SeeAllButton
            onPress={() => {
              setSeeAll1(!seeAll1);
            }}
          />

          {/* Most recommended */}
          {seeAll1 && (
            <>
              <MostRecommended />

              {/* See All 2 */}
              <SeeAllButton
                onPress={() => {
                  setSeeAll2(!seeAll2);
                }}
              />
            </>
          )}

          {/* See All 2 */}
          {seeAll2 && (
            <View style={styles.mapContainer}>
              {/*  */}
              <Text style={styles.listHeading}>{Constants.FIND_BAR_BER}</Text>
              <FindLocation />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

// Nearest Barber Shop
const NearestBarberShop = () => {
  return (
    <View style={styles.barCarContainer}>
      {/* Nearest Babershop  */}
      <Text style={styles.listHeading}>{Constants.BAR_SHOP}</Text>
      <HomeCommonListData data={nearestBarShopList} />
    </View>
  );
};

// Most recommended
const MostRecommended = () => {
  return (
    <View style={styles.mostRecommendedContainer}>
      <Text style={styles.listHeading}>{Constants.MUST_RECOMMENDED}</Text>
      {/* Most Recommended Banner */}
      <MostRecommendedBanner data={mostRecommendedBanner} />

      {/* Most recommended List Of Data */}
      <HomeCommonListData data={mostRecommended} />
    </View>
  );
};

export default Home;

const nearestBarShopList = [
  {
    image: require("@/assets/image/Home/BarImg/HomeBar_1.png"),
    barName: "Alana Barbershop - Haircut massage & Spa ",
    location: "Banguntapan (5 km)",
    points: 4.5,
  },
  {
    image: require("@/assets/image/Home/BarImg/HomeBar_2.png"),
    barName: "Hercha Barbershop - Haircut & Styling",
    location: "Jalan Kaliurang (8 km)",
    points: 5.0,
  },
  {
    image: require("@/assets/image/Home/BarImg/HomeBar_3.png"),
    barName: "Barberking - Haircut styling  & massage",
    location: "Jogja Expo Centre (12 km)",
    points: 4.7,
  },
];

// Most Recommended Banner
const mostRecommendedBanner = [
  {
    imageSource: require("@/assets/image/Home/MostRecommended/Banner/HomePic2.png"),
    barName: "Master piece Barbershop - Haircut styling",
    location: "Banguntapan (5 km)",
    points: 4.5,
  },
  {
    imageSource: require("@/assets/image/Home/MostRecommended/Banner/HomePic2.png"),
    barName: "Alana Barbershop - Haircut massage & Spa ",
    location: "Banguntapan (5 km)",
    points: 4.5,
  },
  {
    imageSource: require("@/assets/image/Home/MostRecommended/Banner/HomePic2.png"),
    barName: "Barberman - Haircut styling & massage",
    location: "J-Walk Centre  (17 km)",
    points: 4.7,
  },
];

// Most Recommended Data List
const mostRecommended = [
  {
    image: require("@/assets/image/Home/MostRecommended/recommended1.png"),
    barName: "Varcity Barbershop Jogja ex The Varcher ",
    location: "Condongcatur (10 km)",
    points: 4.5,
  },
  {
    image: require("@/assets/image/Home/MostRecommended/recommended2.png"),
    barName: "Twinsky Monkey Barber & Men Stuff",
    location: "Jl Taman Siswa (8 km)",
    points: 5.0,
  },
  {
    image: require("@/assets/image/Home/MostRecommended/recommended3.png"),
    barName: "Barberman - Haircut styling & massage",
    location: "J-Walk Centre  (17 km)",
    points: 4.7,
  },
];
