import { ColorSheet } from "@/utilis/ColorSheet";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: hp(25),
    marginTop: hp(1),
    marginBottom: hp(3),
  },
  imgStyle: {
    width: "100%",
    height: hp(25),
    borderRadius: hp(2),
    resizeMode: "cover",
    alignItems: "center",
    marginBottom: hp(2),
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
});
