import { ColorSheet } from '@/utilis/ColorSheet';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  button_root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ColorSheet.Secondary,
    paddingHorizontal: wp(2),
    paddingVertical: hp(2),
    borderRadius: hp(1),
    gap: 5,
  },
  title_txt: {
    fontSize: RFValue(16),
    color: ColorSheet.White,
    fontWeight: '500',
  },
});
