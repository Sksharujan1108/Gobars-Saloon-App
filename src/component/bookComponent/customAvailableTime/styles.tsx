import { ColorSheet } from "@/utilis/ColorSheet";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  time_container: {
    padding: hp(1),
    height: hp(5),
    marginRight: hp(1),
    marginBottom: hp(2),
    justifyContent: "center",
    alignItems: "center",
    borderColor: ColorSheet.Secondary,
    borderWidth: 1,
    borderRadius: 10,
  },
  not_available_time_container: {
    borderColor: '#D7D6E0',
  },
  selected_time_container: {
    backgroundColor: '#D7D6E0',
  },
  time_text: {
    fontSize: RFValue(13),
    fontWeight: "700",
    color: ColorSheet.Secondary,
  },
  not_available_time_text :{
    color: '#D7D6E0',
  },
});
