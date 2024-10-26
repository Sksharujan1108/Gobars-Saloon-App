import { ColorSheet } from "@/utilis/ColorSheet";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: hp(1),
  },
  list_card_container: {
    width: '100%',
    // padding: hp(1),
    marginBottom: hp(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  image_style: {
      width: hp(6),
      height: hp(6),
      borderRadius: hp(3),
  },
  text_container: {
    width: '78%',
    gap: 8,
    // backgroundColor: 'green'
  },
  title: {
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(13),
    fontWeight: '600',
    color: ColorSheet.Secondary,
  },
  service: {
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(12),
    fontWeight: '500',
    color: ColorSheet.Text2,
  },
  star_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  review: {
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(13),
    fontWeight: '600',
    color: ColorSheet.Text2,
  },
});
