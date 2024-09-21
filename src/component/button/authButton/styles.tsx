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
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: hp(2),
    borderColor: ColorSheet.BorderColor1,
    paddingHorizontal: wp(2),
    paddingVertical: hp(2),
  },
  title_txt: {
    marginLeft: hp(1),
    fontSize: RFValue(12),
    color: ColorSheet.Secondary,
    fontWeight: '500',
  },
});
