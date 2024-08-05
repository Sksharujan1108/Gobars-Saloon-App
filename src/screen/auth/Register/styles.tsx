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
    marginTop: Platform.OS == 'android' ? hp(10) : hp(4),
    alignSelf: 'center',
    // backgroundColor: 'pink'
  },
  subTitle: {
    marginTop: hp(1),
    fontSize: RFValue(14),
    fontWeight: "400",
    textAlign: 'left',
    // backgroundColor: 'red',
    color: ColorSheet.Text2,
  },
  inputMainContainer:{
    marginTop: hp(1),
    // backgroundColor: 'red'
  },
  scrollView: {
    width: '100%',
    paddingBottom: hp(2),
  },
  inputTitle: {
    marginTop: hp(1),
    fontSize: RFValue(14),
    fontWeight: "500",
    color: ColorSheet.InputTitleText,
  },
  buttonContainer: {
    marginTop: hp(3),
    paddingHorizontal: wp(10),
    paddingVertical: hp(1.5),
    borderRadius: hp(1),
    backgroundColor: ColorSheet.PrimaryButton,
  },
  alreadyAccContainer: {
    marginTop: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  alreadyAccText:{
    fontSize: RFValue(13),
    fontWeight: "500",
    color: ColorSheet.InputTitleText,
  },
  textButtonStyle: {
    fontSize: RFValue(13),
    textDecorationLine: 'underline',
    color: ColorSheet.InputTitleText,
  },
});
