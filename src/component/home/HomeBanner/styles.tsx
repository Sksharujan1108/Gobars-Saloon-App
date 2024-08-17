import { ColorSheet } from "@/utilis/ColorSheet";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  rootContainer: {
    marginTop: hp(2),
    // backgroundColor: 'yellow'
  },
  imgBackground: {
    width: '100%',
    height: hp(30),
    borderRadius: 10,
  },
  imgLogoPic: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: wp(20),
    height: hp(10),
    borderRadius: 10,
    resizeMode: 'cover',
  },
  imgPic: {
    position: 'absolute',
    bottom: 0,
    right: -55,
    width: wp(65),
    height: hp(30),
    resizeMode: 'cover',
    // backgroundColor: 'pink'
  },
  btnContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    width: wp(35),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: ColorSheet.PrimaryButton,
  },
  btnText: {
    color: ColorSheet.White,
    fontSize: RFValue(14),
    fontWeight: '500',
  },
});
