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
    // alignItems: 'center',
  },
  mainViewContainer: {
    width: '90%',
    marginTop: Platform.OS == 'android' ? hp(15) : hp(5),
    alignSelf: 'center',
    // backgroundColor: 'pink'
  },
  subTitle: {
    paddingTop: hp(2),
    marginBottom: hp(3),
    fontSize: RFValue(14),
    fontWeight: "400",
    textAlign: 'left',
    // backgroundColor: 'red',
    color: ColorSheet.Text2,
  },
  inputTitle: {
    fontSize: RFValue(14),
    fontWeight: "500",
    color: ColorSheet.InputTitleText,
  },
  buttonContainer: {
    marginTop: hp(3),
  },
  textButtonStyle: {
    marginTop: hp(3),
    textDecorationLine: 'underline',
    color: ColorSheet.Text2,
  },
});
