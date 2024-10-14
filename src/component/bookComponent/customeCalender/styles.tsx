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
    width: "100%",
  },
  header_Text: {
    fontSize: Platform.OS == 'android' ? RFValue(18) : RFValue(14),
    fontWeight: '600',
    color: ColorSheet.Secondary,
    marginBottom: hp(2),
  },
});
