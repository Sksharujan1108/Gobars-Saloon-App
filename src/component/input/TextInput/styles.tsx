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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: hp(6),
        paddingLeft: hp(2),
        marginBottom: hp(3),
        borderColor: ColorSheet.textDefaultColor,
        borderWidth: 1,
        borderRadius: 5,
    },
    iconContainer: {},
    textInput: {
        flex: 1,
        fontSize: RFValue(14),
        paddingVertical: hp(1.5),
        fontWeight: '500',
        color: ColorSheet.Secondary,
    },
    eyeIcon: {
        marginRight: hp(2),
    },
    errorText: {
        fontSize: RFValue(12),
        color: ColorSheet?.Error,
        marginTop: hp(0.5),
    },
});
