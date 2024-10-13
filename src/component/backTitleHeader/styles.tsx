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
        padding: hp(2),
        flexDirection: 'row',
        alignItems: 'center',
    },
    title_text: {
        marginLeft: hp(3),
        fontSize:Platform.OS == 'android' ? RFValue(16) : RFValue(14),
        color: ColorSheet.Secondary,
        fontWeight: '600',
    },
});
