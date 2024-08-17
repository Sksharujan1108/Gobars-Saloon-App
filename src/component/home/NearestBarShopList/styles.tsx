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
        flex: 1,
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: hp(1),
        // backgroundColor: ColorSheet.OtpFocus,
        marginVertical: hp(1),
    },
    imageStyle: {
        width: wp(23),
        height: wp(23),
        borderRadius: 2,
        resizeMode: 'contain',
        // backgroundColor: 'green'
    },
    columnContainer: {
        flexDirection: 'column',
        marginLeft: wp(2),
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: wp(1),
        // backgroundColor: 'yellow'
    },
    barName: {
        width: wp(70),
        fontSize: RFValue(14),
        color: ColorSheet.InputTitleText,
        marginLeft: wp(1),
        // backgroundColor: 'red'
    },
    location: {
        fontSize: RFValue(12),
        color: ColorSheet.textDefaultColor,
        marginLeft: wp(1),
    },
    points: {
        fontSize: RFValue(12),
        color: ColorSheet.textDefaultColor,
        marginLeft: wp(1),
    },
});
