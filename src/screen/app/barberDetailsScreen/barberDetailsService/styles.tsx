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
  our_service_text: {
    marginBottom: hp(2),
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(14),
    fontWeight: '500',
    color: ColorSheet.Secondary,
  },
});
