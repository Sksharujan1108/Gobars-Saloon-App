import { ColorSheet } from "@/utilis/ColorSheet";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  Container: {
    width: wp(90),
    marginBottom: hp(3),
    // backgroundColor:'red'
  },
  imageContainer: {
    width: "100%",
    height: hp(25),
    marginTop: hp(1),
    marginBottom: hp(1),
  },
  imgStyle: {
    width: "100%",
    height: hp(25),
    borderRadius: hp(2),
    resizeMode: 'stretch',
    alignItems: "center",
    marginBottom: hp(2),
    backgroundColor: 'red'
  },
  bookingBtn: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: wp(30),
    height: hp(7),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: hp(2),
    borderBottomRightRadius: hp(2),
    backgroundColor: ColorSheet.PrimaryButton,
  },
  bookingText: {
    paddingRight: hp(1),
    fontSize: RFValue(14),
    fontWeight: "700",
    color: ColorSheet.White,
  },
  barName: {
    width: "100%",
    fontSize: Platform.OS == "android" ? RFValue(14) : RFValue(13),
    fontWeight: "800",
    color: ColorSheet.InputTitleText,
  },
  rowContainer: {
    marginTop: hp(0.5),
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: 'yellow'
  },
  location: {
    fontSize: Platform.OS == "android" ? RFValue(14) : RFValue(13),
    fontWeight: "500",
    color: ColorSheet.IconColor,
    marginLeft: wp(1),
  },
  points: {
    fontSize: Platform.OS == "android" ? RFValue(14) : RFValue(13),
    fontWeight: "500",
    color: ColorSheet.IconColor,
    marginLeft: wp(1),
  },
});
