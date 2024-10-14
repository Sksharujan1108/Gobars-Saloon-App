import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React, { useRef, useState } from "react";
import { styles } from "./styles";
import SearchInput from "@/component/input/SearchInput";
import Filter from "@/assets/svg/home/Filter.svg";
import { Constants } from "./constants";
import HomeCommonListData from "@/component/home/HomeCommonListData";
import HomeFilterPopUp from "./fliterPopUp";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import MobileHomeTopHeader from "@/component/MobileHomeTopHeader";
import HomeOfferCardSlider from "@/component/home/HomeOfferCardSlider";
import HomeListCategory from "@/component/home/HomeListCategory";
import { ColorSheet } from "@/utilis/ColorSheet";

const Home = () => {
  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState<any>("New");

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // Function to filter nearest barber shop list
  // const filteredNearestBarberShops = nearestBarShopList.filter((item) =>
  //   item.barName.toLowerCase().includes(search.toLowerCase())
  // );

  // Function to filter most recommended list
  // const filteredMostRecommended = mostRecommended.filter((item) =>
  //   item.barName.toLowerCase().includes(search.toLowerCase())
  // );

  // Handle category selection efficiently with useCallback
  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
  };

  const [seeAll1, setSeeAll1] = useState(false);

  const [seeAll2, setSeeAll2] = useState(false);

  // handleFilter
  const handleFilter = () => {
    bottomSheetModalRef.current?.present();
  };

  return (
    <View style={styles.rootContainer}>
      <SafeAreaView style={{ flex: 1}}>
        {/* Status Bar */}
        <StatusBar
          barStyle="light-content"
          // backgroundColor={'transparent'} 
          // translucent={true} // Set this to false for a solid background color
        />

        {/* MainContainer */}
        <View style={styles.MainContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.flex_container_1}>
              {/* Header */}
              <MobileHomeTopHeader
                name={"Sk Sarujan"}
                location={"Kathmandu, Nepal"}
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
                  onPress={handleFilter}
                >
                  <Filter />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.flex_container_2}>
              {/* Offer Card */}
              <View style={styles.offerCard_container}>
                <HomeOfferCardSlider />
              </View>

              {/* Category */}
              <View style={styles.category_container}>
                <HomeListCategory
                  dataList={categories}
                  onPress={handleCategoryPress}
                  isActive={(category) => category === selectedCategory}
                />
              </View>

              {/* List */}
              <View style={styles.list_of_data_container}>
                <HomeCommonListData data={nearestBarShopList} />
              </View>
            </View>
          </ScrollView>
        </View>

        <HomeFilterPopUp bottomSheetModalRef={bottomSheetModalRef} />
      </SafeAreaView>
    </View>
  );
};

export default Home;

const categories = [
  {
    name: "Haircuts",
    image: require("@/assets/image/Home/category/hairCut.png"),
  },
  {
    name: "Coloring",
    image: require("@/assets/image/Home/category/hairCut.png"),
  },
  {
    name: "Shaving",
    image: require("@/assets/image/Home/category/hairCut.png"),
  },
  {
    name: "More",
    image: require("@/assets/image/Home/category/hairCut.png"),
  },
];

const nearestBarShopList = [
  {
    image: require("@/assets/image/Home/homeBar_Pic.png"),
    barName: "Captain Barbershop",
    location: "123 Main Street, Anytown, USA",
    points: 4.5,
  },
  {
    image: require("@/assets/image/Home/homeBar_Pic.png"),
    barName: "Hercha Barbershop",
    location: "123 Main Street, Anytown, USA",
    points: 5.0,
  },
  {
    image: require("@/assets/image/Home/homeBar_Pic.png"),
    barName: "Barberking - Haircut",
    location: "123 Main Street, Anytown, USA",
    points: 4.7,
  },
];
