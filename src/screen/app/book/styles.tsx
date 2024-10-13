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
    marginTop: Platform.OS == 'android' ? hp(6) : 0,
    backgroundColor: ColorSheet.White,
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: hp(3),
  },
  main_container: {
    width: "100%",
    paddingHorizontal: hp(2),
    paddingBottom: hp(2),
    // backgroundColor: 'pink'
  },
  common_heading_text: {
    fontSize: Platform.OS == 'android' ? RFValue(18) : RFValue(14),
    fontWeight: "600",
    color: ColorSheet.Secondary,
    marginTop: hp(3),
  },
});
