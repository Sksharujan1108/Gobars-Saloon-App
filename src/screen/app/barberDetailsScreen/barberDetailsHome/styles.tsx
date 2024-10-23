import { ColorSheet } from "@/utilis/ColorSheet";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { NavigationContainer } from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: Platform.OS == 'android' ? hp(6) : 0,
    backgroundColor: 'pink',
  },
  scrollView: {
    flexGrow: 1,
  },
  main_container: {
    width: '100%',
    padding: hp(2),
    backgroundColor: 'yellow',
  },
  image_container: {
    width: wp(92),
    height: wp(55),
    alignSelf: 'center',
    // backgroundColor: 'red'
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: hp(2),
  },
  image_open_button_style: {
    position: 'absolute',
    top: 0,
    right:0,
    flex: 0.5,
    paddingHorizontal: hp(2.2),
    paddingVertical: hp(1.2),
    borderTopRightRadius: hp(2),
    borderBottomLeftRadius: hp(2),
    backgroundColor: ColorSheet.OpenButton,
  },
  open_button_text: {
    color: ColorSheet.White,
    fontSize: RFValue(13),
    fontWeight: 'bold',
  },
  service_row_container: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginTop: hp(2),
    marginBottom: hp(1),
    // backgroundColor: 'yellow',
  },
  header_text: {
    fontSize: Platform.OS == 'android' ? RFValue(19) : RFValue(14),
    fontWeight: '600',
    color: ColorSheet.Secondary,
  },
  service_text: {
    fontSize: Platform.OS == 'android' ? RFValue(19) : RFValue(14),
    fontWeight: '600',
    color: ColorSheet.Secondary,
  },
  row_container : {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(1),
    gap: 5,
  },
  location_text: {
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(12),
    fontWeight: '500',
    color: ColorSheet.Text2,
  },
  review_text: {
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(12),
    fontWeight: '500',
    color: ColorSheet.Text2,
  },
  option_row_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'red'
  },

  switch_container: {
    width: '100%',
    height: hp(8),
    backgroundColor: 'green'
  },
});
