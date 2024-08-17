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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    locationNameContainer: {
        flexDirection: 'column',
        // backgroundColor: 'pink',
        justifyContent: 'space-between',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'gray'
    },
    location: {
        fontSize: RFValue(12),
        fontWeight: '600',
        color: ColorSheet.textDefaultColor
    },
    userName: {
        marginTop: wp(1),
        fontSize: RFValue(14),
        fontWeight: '600',
        color: ColorSheet.PrimaryButton
    },
    imgStyle: {
        width: wp(13),
        height: wp(13),
        borderRadius: wp(6.5),
        resizeMode: 'contain',
    },
});
