import { ColorSheet } from '@/utilis/ColorSheet';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
    button_container: {
        width: wp(20),
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    image_view_container: {
        width: wp(18),
        height: hp(8),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ColorSheet.BackGround,
    },
    title_text: {
        fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(12),
        fontWeight: '400',
        color: ColorSheet.Text2,
        marginTop: hp(1),
    },
});
