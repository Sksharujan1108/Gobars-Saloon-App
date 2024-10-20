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
    marginBottom: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  image_style: {
      width: hp(7),
      height: hp(7),
      borderRadius: hp(3.5),
  },
  text_container: {
    gap: 5
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
  price: {
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(13),
    fontWeight: '600',
    color: ColorSheet.Secondary,
  },
});
