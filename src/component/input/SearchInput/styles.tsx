import { ColorSheet } from '@/utilis/ColorSheet';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        width: wp(72),
        flexDirection: 'row',
        alignItems: 'center',
        padding: hp(1),
        borderRadius: hp(1),
        backgroundColor: ColorSheet.OtpFocus,
    },
    textInput: {
        flex: 1,
        height: hp(3),
        marginLeft: hp(1),
        fontSize: RFValue(12),
        // backgroundColor: 'red'
    },
    icon: {},
});
