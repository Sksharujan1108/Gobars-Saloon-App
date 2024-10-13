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
    paddingBottom: hp(2)
  },
  image_container: {
    flex: 0.5,
  },
  image: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: hp(42),
    resizeMode: 'cover',
    // backgroundColor: 'yellow',
  },
  details_container: {
    flex: 0.7,
  },
  white_container: {
    width: '100%',
    height: hp(70),
    padding: hp(3),
    borderStartStartRadius: hp(3),
    borderStartEndRadius: hp(3),
    backgroundColor: ColorSheet.White,
  },
  header_row_container: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginBottom: hp(1),
    // backgroundColor: 'yellow',
  },
  header_text: {
    fontSize: RFValue(16),
    fontWeight: '700',
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
    fontSize: RFValue(12),
    fontWeight: '700',
    color: ColorSheet.Text2,
  },
  row_container : {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(1),
    gap: 5,
  },
  location_text: {
    fontSize: RFValue(12),
    fontWeight: '700',
    color: ColorSheet.Text2,
  },
  review_text: {
    fontSize: RFValue(12),
    fontWeight: '700',
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
    marginBottom: hp(1),
    // backgroundColor: 'blue',
  },
  specialist_text: {
    fontSize: RFValue(15),
    fontWeight: '700',
    color: ColorSheet.Secondary,
  },
  see_all_text: {
    fontSize: RFValue(14),
    fontWeight: '700',
    color: ColorSheet.Secondary,
  },
});
