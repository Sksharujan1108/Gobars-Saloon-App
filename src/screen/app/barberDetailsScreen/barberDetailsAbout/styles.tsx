import { ColorSheet } from "@/utilis/ColorSheet";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: hp(2),
    // backgroundColor: ColorSheet.Secondary,
  },
  sub_title_text: {
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(13),
    fontWeight: '500',
    color: ColorSheet.Secondary,
    lineHeight: hp(2.6),
    // backgroundColor: 'yellow'
  },
  opening_hours_card: {
    width: '100%',
    marginTop: hp(3),
    // backgroundColor: 'red'
  },
  header_text: {
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(14),
    fontWeight: '500',
    color: ColorSheet.Secondary,
  },
  main_row_container: {
    marginTop: hp(1),
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
  },
  row_container: {
    marginBottom: hp(0.5),
    flexDirection: 'row',
    alignItems: 'center', 
  },
  common_text: {
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(12),
    fontWeight: '400',
    color: ColorSheet.Text2,
  },
  common_time_text: {
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(12),
    fontWeight: '400',
    color: ColorSheet.Secondary,
  },
  our_tim_card: {
    width: '100%',
    marginTop: hp(2),
    // backgroundColor: 'red'
  },
});
