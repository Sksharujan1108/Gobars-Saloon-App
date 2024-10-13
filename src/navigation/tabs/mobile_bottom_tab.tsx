import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../stack/appStack/home/homeStack";
import BookStack from "../stack/appStack/book/bookStack";
import ChatStack from "../stack/appStack/chat/chatStack";
import ProfileStack from "../stack/appStack/profile/profileStack";
import { ColorSheet } from "@/utilis/ColorSheet";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
import Home from '@/assets/svg/bottomTab/Home.svg'
import Book from '@/assets/svg/bottomTab/Book.svg'
import Chat from '@/assets/svg/bottomTab/Book.svg'
import Profile from '@/assets/svg/bottomTab/Profile.svg'
import { RFValue } from "react-native-responsive-fontsize";

const Tab = createBottomTabNavigator();

const AppBottomTop = () => {
  return (
    <SafeAreaView
      style = {styles.root}
    >

      <Tab.Navigator
        screenOptions={
          {
            headerShown: false,
            tabBarActiveTintColor: ColorSheet.PrimaryButton,
            tabBarInactiveTintColor: ColorSheet.textDefaultColor,

            tabBarStyle: {
                backgroundColor: ColorSheet.White,
                borderTopWidth: 0,
                height: Platform.OS == 'android' ? hp(10) : hp(7)
            },
            tabBarShowLabel: false,
          }
        }
      >
        <Tab.Screen 
          name = "HomeScreenStack" 
          component = {HomeStack} 
          options = {() => ({
            tabBarIcon: ({ color }) => (
              <View style={styles.iconView}>
                <Home
                  fill={color}
                  width={30}
                  height={30}
                />
                <Text
                  style = {[
                    styles.labelText,
                    {
                        color: color,
                    }
                  ]}
                >
                  Home
                </Text>
              </View>
            ),
          })}
        />
        <Tab.Screen 
          name = "BookScreenStack" 
          component = {BookStack} 
          options = {() => ({
            tabBarIcon: ({ color }) => (
              <View style={styles.iconView}>
                <Book
                  fill={color}
                  width={30}
                  height={30}
                />
                <Text
                  style = {[
                    styles.labelText,
                    {
                        color: color,
                    }
                  ]}
                >
                  Book
                </Text>
              </View>
            ),
          })}
        />
        <Tab.Screen 
          name="ChatScreenStack" 
          component={ChatStack} 
          options={() => ({
            tabBarIcon: ({ color }) => (
              <View style={styles.iconView}>
                <Chat
                  fill={color}
                  width={30}
                  height={30}
                />
                <Text
                  style = {[
                    styles.labelText,
                    {
                        color: color,
                    }
                  ]}
                >
                  Chat
                </Text>
              </View>
            ),
          })}
        />
        <Tab.Screen 
          name="ProfileScreenStack" 
          component={ProfileStack} 
          options={() => ({
            tabBarIcon: ({ color }) => (
              <View style={styles.iconView}>
                <Profile
                  fill={color}
                  width={30}
                  height={30}
                />
                <Text
                  style = {[
                    styles.labelText,
                    {
                        color: color,
                    }
                  ]}
                >
                  Profile
                </Text>
              </View>
            ),
          })}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    //  backgroundColor: ColorSheet.Secondary,
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Platform.OS == 'ios' ? hp(0) : hp(0),
    // backgroundColor: 'red'
  },
  labelText: {
    fontSize: Platform.OS == 'ios' ? RFValue(11) : RFValue(14),
    fontWeight: '500',
  },
});

export default AppBottomTop;
