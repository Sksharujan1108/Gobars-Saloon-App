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
  imgContainer: {
    flex: 0.5,
    alignItems: 'center',
  },
  imgBgStyle: {
    width: wp(100),
    resizeMode: "cover",
    alignSelf: 'center',
  },
  imgPicStyle: {
    position: 'absolute',
    top: hp(3),
    width: wp(90),
    height: hp(50),
    resizeMode: "contain",
    // backgroundColor: 'pink'
  },
  loginBottomContainer: {
    flex: 0.6,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: ColorSheet.White,
  },
  mainViewContainer: {
    margin: hp(2),
    // backgroundColor: 'red' 
  },
  title: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    color: ColorSheet.Secondary,
  },
  SubTitle: {
    paddingTop: hp(2),
    paddingBottom: hp(2),
    fontSize: RFValue(13),
    color: ColorSheet.textDefaultColor,
  },
  buttonContainer: {
    marginTop: hp(2),
    marginBottom: hp(2),
    paddingHorizontal: wp(10),
    paddingVertical: hp(1.5),
    borderRadius: hp(1),
    backgroundColor: ColorSheet.PrimaryButton,
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(1),
    // backgroundColor: 'pink'
  },
  registerText: {
    fontSize: RFValue(13),
    fontWeight: "bold",
    color: ColorSheet.textDefaultColor,
  },
});
