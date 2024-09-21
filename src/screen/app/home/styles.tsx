import { ColorSheet } from "@/utilis/ColorSheet";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { NavigationContainer } from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: Platform.OS == 'android' ? hp(6) : 0,
    // backgroundColor: 'red'
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: hp(2)
  },
  MainContainer: {
    flex: 1,
    // backgroundColor: 'pink'
  },
  flex_container_1: {
    flex: 0.05,
    padding: hp(2),
    backgroundColor: ColorSheet.Secondary,
  },
  searchContainer: {
    width: '100%',
    marginTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'pink'
  },
  fliterBtn: {
    flex: 0.8,
    borderRadius: 10,
    backgroundColor: ColorSheet.NotificationBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex_container_2: {
    flex: 0.95,
    // backgroundColor: 'green',
  },
  offerCard_container: {
    width: hp(100),
    height: hp(20),
    marginTop: hp(2),
    // backgroundColor: 'pink'
  },
  category_container: {
    width: '100%',
    paddingHorizontal: hp(1),
    marginTop: hp(2),
    // backgroundColor: 'pink'
  },
  list_of_data_container: {
    width: '100%',
    paddingHorizontal: hp(3),
    marginTop: hp(1),
  },
  // 
  mapContainer: {
    width: '100%',
    marginTop: hp(3),
    // backgroundColor: 'pink'
  },
});
