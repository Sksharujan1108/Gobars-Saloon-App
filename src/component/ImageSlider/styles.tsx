import { ColorSheet } from "@/utilis/ColorSheet";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: 'pink',
  },
  Container: {
    width: '91%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    width: "100%",
    height: hp(25),
    borderRadius: hp(2),
    resizeMode: 'cover',
  },
  bookingBtn: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: wp(30),
    height: hp(7),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: hp(2),
    borderBottomRightRadius: hp(2),
    backgroundColor: ColorSheet.PrimaryButton,
  },
  bookingText: {
    paddingRight: hp(1),
    fontSize: RFValue(14),
    fontWeight: "700",
    color: ColorSheet.White,
  },
  textContainer:{
    width: '92%',
  },
  barName: {
    marginTop: 10,
    fontSize: RFValue(14),
    fontWeight: "800",
    color: ColorSheet.InputTitleText,
    // backgroundColor: 'yellow'
  },
  rowContainer: {
    marginTop: hp(0.5),
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    fontSize: RFValue(14),
    fontWeight: "500",
    color: ColorSheet.IconColor,
    marginLeft: wp(1),
  },
  points: {
    fontSize: RFValue(14),
    fontWeight: "500",
    color: ColorSheet.IconColor,
    marginLeft: wp(1),
  },
  pagination: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  dot: {
    width: hp(1.5),
    height: hp(1.5),
    borderRadius: hp(1),
    backgroundColor: ColorSheet.PrimaryText,
    marginHorizontal: wp('1%'),
  },
  active_dot: {
    width: hp(1.5),
    height: hp(1.5),
    borderRadius: hp(1),
    backgroundColor: ColorSheet.PrimaryButton,
    marginHorizontal: wp('1%'),
  },
});
