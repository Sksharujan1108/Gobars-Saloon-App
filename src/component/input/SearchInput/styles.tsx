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
        width: wp(73),
        height: hp(6),
        flexDirection: 'row',
        alignItems: 'center',
        padding: hp(1.5),
        borderRadius: 10,
        backgroundColor: ColorSheet.NotificationBg,
    },
    textInput: {
        width: '75%',
        height: hp(4),
        marginLeft: hp(1.5),
        marginRight: hp(1),
        fontSize: RFValue(14),
        // backgroundColor: 'red'
    },
    icon: {},
});
