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
  service_Card: {
    marginTop: hp(1),
    paddingHorizontal: hp(3),
    // backgroundColor: ColorSheet.White,
  },
  data_container_style: {
    backgroundColor: ColorSheet.White,
  },
  white_container: {
    width: '100%',
    padding: hp(2),
    borderTopRightRadius: hp(3),
    borderTopLeftRadius: hp(3),
    // backgroundColor: 'green'
    backgroundColor: ColorSheet.White
  },
  row_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: hp(1),
  },
  common_title_text: {
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(14),
    fontWeight: '600',
    color: ColorSheet.Secondary,
  },
  today_date_time_text: {
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(13),
    fontWeight: '500',
    color: ColorSheet.Text2,
  },
  service_list_container: {
    marginTop: hp(2),
    // backgroundColor: 'pink'
  },
  apply_coupon_container: {
    marginTop: hp(1),
    // marginBottom: hp(2),
  },
  input_button_row_container: {
    width: '100%',
    marginTop: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: hp(2),
    borderColor: '#D1D5DB',
    // backgroundColor: 'pink'
  },
  coupon_card_input_row_container: {
    width: '70%',
    padding: hp(1),
    gap: 5,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  input_container: {
    flex: 1,
  },
  apply_button_container: {
    width: '30%',
    borderTopRightRadius: hp(1),
    borderBottomRightRadius: hp(1),
    borderRadius: 0,
  },
});
