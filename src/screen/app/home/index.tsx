import { Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MobileTopHeader from '@/component/MobileTopHeader'
import { styles } from './styles'
import HomeBanner from '@/component/home/HomeBanner'
import SearchInput from '@/component/input/SearchInput'
import Setting from '@/assets/svg/home/settingHome.svg'
import { Constants } from './constants'
import NearestBarShopList from '@/component/home/NearestBarShopList'

const Home = () => {
  const [search, setSearch] = useState('')
  return (
    <View style = {styles.rootContainer}>
      <ScrollView
        contentContainerStyle = {styles.scrollView}
        showsVerticalScrollIndicator = {false}
      >
        {/* MainContainer */}
      <View style = {styles.MainContainer}>
        {/* Header */}
        <MobileTopHeader/>
        {/* Banner */}
        <HomeBanner
          onPress = {() => {
            console.log('Booking Now')
          }}
        />
          {/* Search Component */}
          <View style = {styles.searchContainer}>
            {/* Search */}
            <SearchInput
              placeholder = {Constants.SEARCH}
              value = {search}
              onChangeText = {(text: any) => {
                setSearch(text)
              }}
              onPressClose = {() => {
                setSearch('')
              }}
            />

            {/* Filter */}
            <TouchableOpacity
              style = {styles.fliterBtn}
              activeOpacity = {0.5}
              onPress = {() => {
                console.log('Filter')
              }}
            >
              <Setting/>
            </TouchableOpacity>
          </View>

          {/* Bar List */}
          <View style = {styles.barCarContainer}>
            {/* Nearest Babershop  */}
            <Text style = {styles.listHeading}>{Constants.BAR_SHOP} </Text>
            <NearestBarShopList
              data = {nearestBarShopList}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home;

const nearestBarShopList = [
  {
    image: require('@/assets/image/Home/BarImg/HomeBar_1.png'),
    barName: 'Alana Barbershop - Haircut massage & Spa ',
    location: 'Banguntapan (5 km)',
    points: 4.5,
  },
  {
    image: require('@/assets/image/Home/BarImg/HomeBar_2.png'),
    barName: 'Hercha Barbershop - Haircut & Styling',
    location: 'Jalan Kaliurang (8 km)',
    points: 5.0,
  },
  {
    image: require('@/assets/image/Home/BarImg/HomeBar_3.png'),
    barName: 'Barberking - Haircut styling  & massage',
    location: 'Jogja Expo Centre (12 km)',
    points: 4.7,
  }
]