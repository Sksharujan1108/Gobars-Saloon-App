import {
  Text,
  ImageBackground,
  View,
  FlatList,
} from "react-native";
import React, { useCallback, useState } from "react";
import Carousel from "react-native-reanimated-carousel";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { styles } from "./styles";

interface HomeOfferCardSliderProps {}

const HomeOfferCardSlider = (props: HomeOfferCardSliderProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const onSnapToItem = useCallback((index: number) => {
    setActiveSlide(index);
  }, []);

  const data = [
    {
      image: require('@/assets/image/Home/OfferCard/OfferCardBg.png'),
      offerPercentage: '50% OFF',
      percentage: '30%'
    },
    {
      image: require('@/assets/image/Home/OfferCard/OfferCardBg.png'),
      offerPercentage: '40% OFF',
      percentage: '40%'
    },
    {
      image: require('@/assets/image/Home/OfferCard/OfferCardBg.png'),
      offerPercentage: '60% OFF',
      percentage: '20%'
    },
  ];

  return (
    <View style={styles.root}>
      <Carousel
        loop
        width={wp(100)}
        height={hp(40)}
        autoPlay
        autoPlayInterval={4000}
        data={data}
        scrollAnimationDuration={1000}
        renderItem={({ item, index }) => (
          <View style={styles.carouselItemContainer} >
            <ImageBackground
              source={item?.image}
              resizeMode={'stretch'}
              style={{
                width: wp(90),
                height: hp(20),
                padding: hp(2),
                borderRadius: 10,
              }}
            >
              <View style={styles.main_row_container}>
                <View style={styles.text_container}>
                  <Text style={styles.Percentage_text}> {item?.offerPercentage} </Text>
                  <Text style={styles.today_special}> {'Today’s Special'} </Text>
                </View>
                <Text style={styles.Percentage}> {item?.percentage} </Text>
              </View>
              <Text style={styles.sub_title}>{'Get a discount for every service order! Only valid for today!'} </Text>
            </ImageBackground>
          </View>
        )}
        onSnapToItem={onSnapToItem}
        onScrollEnd={onSnapToItem}
      />

      {/* pagination */}
        <FlatList
          data={data}
          contentContainerStyle = {styles.paginationContainer}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View
              key={index}
              style={activeSlide === index ? styles.active_dot : styles.dot}
            />
          )}
        />
    </View>
  );
};

export default HomeOfferCardSlider;
