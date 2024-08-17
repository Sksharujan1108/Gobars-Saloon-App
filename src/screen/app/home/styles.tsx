import { ColorSheet } from "@/utilis/ColorSheet";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: hp(2),
    // backgroundColor: 'red'
  },
  scrollView: {
    flexGrow: 1,
  },
  MainContainer: {
    width: '100%',
    alignSelf: 'center',
    // backgroundColor: 'pink'
  },
  searchContainer: {
    width: '100%',
    marginTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fliterBtn: {
    width: wp(13),
    height: hp(6),
    borderRadius: hp(1),
    backgroundColor: ColorSheet.PrimaryButton,
    alignItems: 'center',
    justifyContent: 'center',
  },
  barCarContainer: {
    width: '100%',
    marginTop: hp(2),
    // backgroundColor: 'pink'
  },
  listHeading: {
    fontSize: RFValue(14),
    fontWeight: '600',
    color: ColorSheet.InputTitleText,
    marginBottom: hp(1),
  },
});
