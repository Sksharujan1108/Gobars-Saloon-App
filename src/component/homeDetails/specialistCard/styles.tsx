import { ColorSheet } from "@/utilis/ColorSheet";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: Platform.OS == 'android' ? wp(26.5) : wp(26),
    height: Platform.OS == 'android' ? hp(18) : hp(16),
    borderRadius: 10,
    marginRight: hp(2),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: ColorSheet.BackGround,
  },
  image: {
    width: wp(16),
    height: wp(16),
    borderRadius: wp(16) / 2,
  },
  name_text: {
    marginTop: hp(0.6),
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(12),
    color: ColorSheet.Secondary,
    fontWeight: "500",
  },
  service_text: {
    marginTop: hp(0.5),
    fontSize: Platform.OS == 'android' ? RFValue(13) : RFValue(11),
    color: ColorSheet.Text2,
    fontWeight: "400",
  },
});
