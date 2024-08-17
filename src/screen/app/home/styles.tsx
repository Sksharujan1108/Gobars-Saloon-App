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
    marginTop: Platform.OS == 'android' ? hp(6) : 0,
    // backgroundColor: 'red'
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: hp(5)
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
    fontSize: Platform.OS == 'ios' ? RFValue(14) : RFValue(16),
    fontWeight: '600',
    color: ColorSheet.InputTitleText,
    marginBottom: hp(1),
  },
  seeAllBtn: {
    width: wp(30),
    height: hp(6),
    padding: hp(1),
    marginTop: hp(2),
    borderRadius: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',
    borderWidth: 2,
    borderColor: ColorSheet.PrimaryButton,
  },
  seeAllText: {
    fontSize: RFValue(14),
    fontWeight: '700',
    color: ColorSheet.InputTitleText,
  },

  mostRecommendedContainer: {
    width: '100%',
    marginTop: hp(3),
    // backgroundColor: 'pink'
  },
});
