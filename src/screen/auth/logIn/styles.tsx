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
    // backgroundColor: 'red'
  },
  scrollView: {
    flex: 1,
    // 
  },
  imgContainer: {
    flex: 0.5,
    alignItems: 'center',
  },
  imgBgStyle: {
    width: wp(100),
    // height: hp(100),
    resizeMode: "cover",
    alignSelf: 'center',
  },
  imgPicStyle: {
    position: 'absolute',
    top: Platform.OS == 'android' ? hp(3) : hp(3),
    width: wp(90),
    height: hp(50),
    resizeMode: "contain",
    // backgroundColor: 'pink'
  },
  loginBottomContainer: {
    flex: Platform.OS == 'android' ? 0.6 : 0.6,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: ColorSheet.White,
  },
  mainViewContainer: {
    padding: hp(2),
    // backgroundColor: 'red' 
  },
  title: {
    fontSize: Platform.OS == 'android' ? RFValue(20) : RFValue(18),
    fontWeight: "bold",
    color: ColorSheet.Secondary,
  },
  SubTitle: {
    paddingTop: hp(1),
    fontSize: Platform.OS == 'android' ? RFValue(15) : RFValue(13),
    fontWeight: '400',
    textAlign: 'left',
    color: ColorSheet.textDefaultColor,
  },
  inputTitle: {
    marginTop: hp(2),
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(12),
    fontWeight: "500",
    color: ColorSheet.InputTitleText,
  },
  forgotStyle: {
    textAlign: 'right', 
    marginTop: hp(2.5),
  },
  buttonContainer: {
    marginTop: hp(2),
    paddingHorizontal: wp(10),
    paddingVertical: hp(1.5),
    borderRadius: hp(1),
    backgroundColor: ColorSheet.PrimaryButton,
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
    color: ColorSheet.textDefaultColor,
  },
});
