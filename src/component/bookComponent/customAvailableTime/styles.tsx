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
    padding: Platform.OS == 'android' ? hp(1.3) : hp(1.2),
    height: Platform.OS == 'android' ? hp(6) : hp(5),
    marginRight: Platform.OS == 'android' ? hp(1.5) :  hp(1),
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
    fontSize: Platform.OS == 'android' ? RFValue(15) : RFValue(12),
    fontWeight: Platform.OS == 'android' ? '800' : "700",
    color: ColorSheet.Secondary,
  },
  not_available_time_text :{
    color: '#D7D6E0',
  },
});
