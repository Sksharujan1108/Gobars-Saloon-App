import { Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MobileTopHeader from '@/component/MobileTopHeader'
import { styles } from './styles'
import HomeBanner from '@/component/home/HomeBanner'
import SearchInput from '@/component/input/SearchInput'
import Setting from '@/assets/svg/home/settingHome.svg'
import { Constants } from './constants'

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
            <Text style = {styles.listHeading}> {Constants.BAR_SHOP} </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home;