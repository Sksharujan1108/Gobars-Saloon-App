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
        padding: hp(1),
        flexDirection: 'row',
        borderRadius: hp(1),
        marginTop: hp(3),
        borderWidth: 1.5,
        borderColor: ColorSheet.Border,
        // backgroundColor: 'pink',
        // marginVertical: hp(1),
    },
    imageContainer: {
        width: wp(23),
        height: wp(35),
        borderRadius: 2,
        // backgroundColor: 'green'
    },
    imageStyle: {
        width: wp(23),
        height: wp(35),
        borderRadius: 2,
        resizeMode: 'contain',
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
        fontSize: Platform.OS == 'android' ? RFValue(14) :  RFValue(14),
        fontWeight: '700',
        color: ColorSheet.InputTitleText,
        // backgroundColor: 'red'
    },
    location: {
        fontSize:  Platform.OS == 'android' ? RFValue(12) : RFValue(12),
        fontWeight: '400',
        color: ColorSheet.SearchPlaceHolderColor,
    },
    points: {
        fontSize:  Platform.OS == 'android' ? RFValue(14) : RFValue(13),
        fontWeight: '400',
        color: ColorSheet.SearchPlaceHolderColor,
        marginLeft: wp(1),
    },
    service_text: {
        paddingTop: hp(0.5),
        fontSize:  Platform.OS == 'android' ? RFValue(13) : RFValue(13),
        fontWeight: '600',
        color: ColorSheet.SearchPlaceHolderColor,
    },
    service_container: {
        width: wp(55),
        paddingTop: hp(0.4),
        // backgroundColor: 'red'
    },
    service_list_text: {
        fontSize:  Platform.OS == 'android' ? RFValue(12) : RFValue(12),
        fontWeight: '400',
        color: ColorSheet.SearchPlaceHolderColor,
    },
});
