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
  buttonContainer: {
    marginTop: hp(5),
  },
  notReceiveBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green',
    marginTop: hp(3),
  },
  notReceiveText: {
    fontSize: Platform.OS == 'android' ? RFValue(16) : RFValue(14),
    fontWeight: "700",
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: ColorSheet.Secondary,
  },
  timerText: {
    width: hp(4),
    // marginLeft: hp(1),
    textAlign: 'center',
    fontSize: Platform.OS == 'android' ? RFValue(16) : RFValue(15),
    fontWeight: "700",
    color: ColorSheet.Secondary,
    // backgroundColor: 'red'
  },
});
