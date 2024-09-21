import { ColorSheet } from "@/utilis/ColorSheet";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  carouselItemContainer: {
    width: wp(100),
    height: hp(20),
    alignItems: "center",
    overflow: "hidden",
  },
  main_row_container: {
    width: "100%",
    marginTop: hp(0.5),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text_container: {
    backgroundColor: "transparent",
  },
  Percentage_text: {
    fontSize: RFValue(14),
    fontWeight: "500",
    color: ColorSheet.White,
  },
  today_special: {
    paddingTop: hp(0.5),
    fontSize: RFValue(16),
    fontWeight: "600",
    color: ColorSheet.White,
  },
  Percentage: {
    fontSize: RFValue(20),
    fontWeight: "700",
    color: ColorSheet.White,
  },
  sub_title: {
    width: "90%",
    marginTop: hp(2),
    fontSize: RFValue(14),
    lineHeight: hp(3),
    fontWeight: "400",
    color: ColorSheet.Secondary,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: hp(1), // Adjust this value as needed to position the dots above/below the image
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  dot: {
    width: hp(1),
    height: hp(1),
    borderRadius: hp(0.5),
    backgroundColor: ColorSheet.DotColor,
    marginHorizontal: wp('1%'),
  },
  active_dot: {
    width: hp(5),
    height: hp(1),
    borderRadius: hp(1),
    backgroundColor: ColorSheet.Secondary,
    marginHorizontal: wp('1%'),
  },
});
