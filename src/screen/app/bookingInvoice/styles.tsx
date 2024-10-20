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
    marginTop: Platform.OS == 'android' ? hp(6) : 0,
    backgroundColor: ColorSheet.Secondary,
  },
  scrollView_container: {
    flexGrow: 1,
    // paddingBottom: hp(20),
  },
  header_style: {
    color: ColorSheet.White,
  },
  success_card: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(3),
    gap: 4,
    paddingHorizontal: hp(3),
    // backgroundColor: 'pink',
  },
  success_text: {
    marginTop: hp(1),
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(14),
    fontWeight: '700',
    color: ColorSheet.White,
  },
  sub_title_text: {
    width: '75%',
    marginTop: hp(0.3),
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(12),
    fontWeight: '400',
    color: ColorSheet.White,
    textAlign: 'center',
    // backgroundColor: 'green'
  },
  white_container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: hp(2),
    marginTop: hp(4),
    borderTopRightRadius: hp(3),
    borderTopLeftRadius: hp(3),
    backgroundColor: ColorSheet.White
  },
  row_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp(1),
  },
  shop_title: {
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(14),
    fontWeight: '600',
    color: ColorSheet.Secondary,
  },
  common_text: {
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(12),
    fontWeight: '500',
    color: ColorSheet.Text2,
  },
  button_container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'pink'
  },
  back_button: {
    width: '46%',
  },
  download_button: {
    width: '46%',
    height: hp(6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    borderWidth: 2,
    borderRadius: hp(1),
    borderColor: ColorSheet.Secondary,
  },
});
