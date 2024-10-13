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
    backgroundColor: ColorSheet.White,
  },
  scrollView_container: {
    flexGrow: 1,
    paddingBottom: Platform.OS == 'android' ? hp(10) : hp(5)
  },
  main_container: {
    flex: 1,
    height: hp(100),
  },
  image: {
    width: '100%',
    height: hp(42),
    resizeMode: 'cover',
    // backgroundColor: 'yellow',
  },
  details_container: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    width: '100%',
    height: hp(63),
    padding: hp(3),
    borderTopLeftRadius: hp(3),
    borderTopRightRadius: hp(3),
    backgroundColor : ColorSheet.White,
  },
  header_row_container: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginBottom: hp(1),
    // backgroundColor: 'yellow',
  },
  header_text: {
    fontSize: Platform.OS == 'android' ? RFValue(19) : RFValue(14),
    fontWeight: '600',
    color: ColorSheet.Secondary,
  },
  open_container: {
    flex: 0.7,
    height: hp(4.5),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ColorSheet.BackGround,
  },
  open: {
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(11),
    fontWeight: '500',
    color: ColorSheet.Text2,
  },
  row_container : {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(1),
    gap: 5,
  },
  location_text: {
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(11),
    fontWeight: '500',
    color: ColorSheet.Text2,
  },
  review_text: {
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(11),
    fontWeight: '500',
    color: ColorSheet.Text2,
  },

  option_card_container: {
    width: '100%',
    marginTop: hp(2),
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginBottom: hp(2),
    // backgroundColor: 'green'
  },
  specialist_container: {
    marginTop: hp(2),
    marginBottom: hp(5),
  },
  specialist_row_container: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginBottom: hp(2),
    // backgroundColor: 'blue',
  },
  specialist_text: {
    fontSize: Platform.OS == 'android' ? RFValue(18) : RFValue(14),
    fontWeight: '600',
    color: ColorSheet.Secondary,
  },
  see_all_text: {
    fontSize: Platform.OS == 'android' ? RFValue(16) : RFValue(13),
    fontWeight: '600',
    color: ColorSheet.Secondary,
  },
});
