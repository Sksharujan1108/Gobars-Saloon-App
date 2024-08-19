import { ColorSheet } from "@/utilis/ColorSheet";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  seeAllBtn: {
    width: wp(30),
    height: hp(6),
    marginTop: hp(2),
    borderRadius: hp(1),
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-around",
    borderWidth: 2,
    borderColor: ColorSheet.PrimaryButton,
  },
  seeAllText: {
    fontSize: RFValue(14),
    fontWeight: "700",
    color: ColorSheet.InputTitleText,
  },
});
