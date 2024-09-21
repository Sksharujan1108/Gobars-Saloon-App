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
        // backgroundColor: 'red',
    },
    locationNameContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    userName: {
        marginTop: wp(1),
        fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(15),
        fontWeight: '600',
        color: ColorSheet.White
    },
    iconContainer: {
        paddingTop: hp(1),
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'gray'
    },
    location: {
        fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(14),
        fontWeight: '600',
        color: ColorSheet.White
    },
    notification_container: {
        width: hp(5),
        height: hp(5),
        borderRadius: hp(5) / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ColorSheet.NotificationBg,
    },
});
