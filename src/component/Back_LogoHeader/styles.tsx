import { StyleSheet, Platform } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";
import { ColorSheet } from "@/utilis/ColorSheet";

export const styles = StyleSheet.create({
  root: {
    width: wp(80),
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: 'red'
    // marginTop: Platform.OS == "ios" ? hp(2) : hp(8),
  },
  headerText: {
    paddingLeft: hp(1),
    fontSize: RFValue(22),
    fontWeight: "bold",
    color: ColorSheet.PrimaryButton,
  },
});
