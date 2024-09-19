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
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main_container: {
    width: wp(90),
    height: hp(70),
    padding: hp(2),
    alignItems: 'center',
    borderRadius: hp(2),
    backgroundColor: ColorSheet.White,
  },
  heading_title: {
    marginTop: hp(3),
    fontSize: RFValue(16),
    fontWeight: '700',
    textAlign: 'center',
    color: ColorSheet.Secondary,
  },
  sub_title: {
    marginTop: hp(2),
    fontSize: RFValue(10),
    // fontWeight: '400',
    textAlign: 'center',
    color: ColorSheet.Text2,
  },
  input_field_container: {
    width: '100%',
    backgroundColor: 'red'
  },
  inputTitle: {
    marginTop: hp(2),
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(12),
    fontWeight: "500",
    color: ColorSheet.InputTitleText,
  },
  forgotStyle: {
    alignSelf: 'flex-end',
    marginTop: hp(2.5),
  },
  buttonContainer: {
    width: '100%',
    marginTop: hp(2),
    paddingHorizontal: wp(10),
    paddingVertical: hp(1.5),
    borderRadius: hp(1),
    backgroundColor: ColorSheet.Secondary,
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(1.5),
    // backgroundColor: 'pink'
  },
  registerText: {
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(13),
    fontWeight: "bold",
    color: ColorSheet.Text2,
  },
});
