import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles';
import BackTitleHeader from '@/component/backTitleHeader';
import Location from "@/assets/svg/home/tabler-icon-map-pin-filled.svg";
import AntDesign from '@expo/vector-icons/AntDesign';
import TouchableClickSvgTitle from '@/component/touchableClickSvgTitle';
import Chat from '@/assets/svg/home/Chat Round Unread.svg';
import Share from '@/assets/svg/home/Share.svg';
import Favorite from '@/assets/svg/home/Heart.svg';

const BarberDetailsHome = () => {
  return (
    <SafeAreaView
      style = {styles.rootContainer}
    >
      {/* Status Bar */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor={"translucent"}
        translucent={true}
      />

      {/* Back Header */}
      <BackTitleHeader
        title='Detail Barber'
        onPress={() => {}}
      />
      {/* Scroll View */}
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        <View style = {styles.main_container}>
          {/* Image */}
          <View style = {styles.image_container}>
            <Image
              style={styles.imageStyle}
              source={{
                uri: 'https://www.statecollegeofbeauty.com/wp-content/uploads/2023/11/Picture1.jpg'
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
            <Text style={styles.header_text}>{'Master piece Barbershop '} - </Text>
            <Text style={styles.service_text}>{'Haircut styling'}</Text>
          </View>
          {/* location */}
          <View style={styles.row_container}>
            <Location 
              fill={'#8683A1'}
            />
            <Text style={styles.location_text}>{'Joga Expo Centre  (2 km)'}</Text>
          </View>
          {/* points */}
          <View style={styles.row_container}>
            {/* Icon */}
            <AntDesign name="star" size={16} color={'#8683A1'} />
            <Text style={styles.review_text}>{'5.0'} {'(20)'}</Text>
          </View>
          {/* options */}
          <View style={styles.option_row_container}>
            <TouchableClickSvgTitle
              child={<Chat/>}
              title='Chat'
              onPress={() => {}}
            />
            <TouchableClickSvgTitle
              child={<Share/>}
              title='Share'
              onPress={() => {}}
            />
            <TouchableClickSvgTitle
              child={<Favorite/>}
              title='Favorite'
              onPress={() => {}}
            />
          </View>
        </View>

        {/* Switch Button */}
        <View style = {styles.switch_container}>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default BarberDetailsHome;