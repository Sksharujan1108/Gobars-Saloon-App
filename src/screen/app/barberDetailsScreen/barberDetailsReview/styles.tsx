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
  button_container: {
    width: '100%',
    marginTop: hp(3),
  },
});
