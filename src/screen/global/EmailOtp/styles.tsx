import { ColorSheet } from '@/utilis/ColorSheet';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
    root: {
        marginTop: hp(2),
        alignItems: 'center',
    },
    // 
    cell: {
        width: wp(16),
        height: Platform.OS == 'android' ? hp(8) : hp(7),
        marginHorizontal: hp(1),
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: ColorSheet.textDefaultColor,
    },
    focusCell: {
        backgroundColor: ColorSheet.OtpFocus,
        borderColor: ColorSheet.PrimaryButton,
    },
    cellText: {
        fontSize: RFValue(18),
        color: ColorSheet.InputTitleText,
    },
});
