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
    mainInputContainer: {
        flexDirection: 'row',
        width: '100%',
        height: hp(6),
        marginTop: hp(1),
        borderRadius: hp(1),
        borderWidth: 1,
        borderColor: ColorSheet.textDefaultColor,
        // backgroundColor: 'red',
    },
    dropdown: {
        width: wp(22),
        borderColor: ColorSheet.Text2,
        borderEndWidth: 1,
        borderStartStartRadius: hp(1),
        borderEndStartRadius: hp(1),
        backgroundColor: ColorSheet.PrimaryText,
    },
    placeholderStyle: {
        fontSize: RFValue(14),
        color: ColorSheet.PrimaryText,
        marginLeft: wp(2),
        fontWeight: '500',

    },
    // Show the data 
    selectedTextStyle: {
        fontSize: RFValue(12),
        color: ColorSheet.Text2,
        paddingLeft: hp(2),
        fontWeight: '500',
        // backgroundColor: 'red'
    },
    iconStyle: {},
    containerStyle: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        marginTop: hp(0.5),
        width: wp(90),
    },

    // code 
    codeView: {},
    code: {},

    // text Input
    textInput: {
        flex: 1,
        fontSize: RFValue(12),
        fontWeight: '500',
        paddingLeft: wp(2),
        color: ColorSheet.PrimaryText,
        // backgroundColor: 'yellow'
    },

    // renderItem
    rowItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: wp(2),
        paddingVertical: hp(1.5),
    },
    textItem: {
        flex: 1,
        fontSize: RFValue(14),
        color: ColorSheet.Text2,
        fontWeight: '500',
    },
    icon: {
        // marginRight: 5,
    },
    // 
    downIcon: {
        marginRight: wp(3),
        // backgroundColor: 'pink'
    },

    // Search
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: wp(2),
        borderColor: ColorSheet.Text2,
        borderBottomWidth: 1,
    },
    searchInput: {
        flex: 1,
        fontSize: RFValue(14),
        color: ColorSheet.Text2,
        fontWeight: '500',
        paddingVertical: hp(1),
        paddingHorizontal: wp(2),   
    },

    errorText: {
        fontSize: RFValue(12),
        color: ColorSheet?.Error,
        marginTop: hp(0.5),
    },
});
