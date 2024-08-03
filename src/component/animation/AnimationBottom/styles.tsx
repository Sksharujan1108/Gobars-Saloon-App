import { ColorSheet } from "@/utilis/ColorSheet";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  bottomView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: hp(25),
    // justifyContent: "center",
    // alignItems: "center",
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: ColorSheet.AnimationBottom,
  },
  bottomTitle: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    color: ColorSheet.White,
  },
  bottomSubtitle: {
    fontSize: RFValue(12),
    marginVertical: hp(1),
    color: "white",
    // textAlign: "center",
  },
  getStartedButton: {
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(10),
    borderRadius: 10,
    backgroundColor: ColorSheet.PrimaryButton,
  },
  getStartedButtonText: {
    fontSize: RFValue(15),
    fontWeight: "bold",
    color: ColorSheet.White,
    textAlign: "center",
  },
});
