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
        marginTop: hp(3),
        // backgroundColor: ColorSheet.OtpFocus,
        // marginVertical: hp(1),
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
        marginLeft: wp(3),
        // backgroundColor: 'yellow'
    },
    rowContainer: {
        marginTop: hp(0.5),
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'yellow'
    },
    barName: {
        width: wp(65),
        fontSize: Platform.OS == 'android' ? RFValue(14) :  RFValue(13),
        fontWeight: '800',
        color: ColorSheet.InputTitleText,
        // backgroundColor: 'red'
    },
    location: {
        fontSize:  Platform.OS == 'android' ? RFValue(14) : RFValue(13),
        fontWeight: '500',
        color: ColorSheet.IconColor,
        marginLeft: wp(1),
    },
    points: {
        fontSize:  Platform.OS == 'android' ? RFValue(14) : RFValue(13),
        fontWeight: '500',
        color: ColorSheet.IconColor,
        marginLeft: wp(1),
    },
});
