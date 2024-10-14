import { ColorSheet } from "@/utilis/ColorSheet";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    bottomSheetContainer: {
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    contentContainer: {

    },
    bottomSheetBackdrop: {
        flex: 1
    },

    headerContainer: {
        width: '100%',
        height: hp(10),
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: hp(2),
        backgroundColor: ColorSheet.OtpFocus
    },
    headerIconContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    featureIcon: {
        marginRight: hp(2)
    },
    headerTitle: {
        color: ColorSheet.InputTitleText,
        fontSize: RFValue(15),
        fontWeight: '800',
    },
    mainContainer: {
        margin: hp(2),
        backgroundColor: 'red'
    },
    commonTitle: {
        color: ColorSheet.Secondary,
        fontSize: RFValue(15),
        fontWeight: '500',
    },
    commonContainer: {
        width: '100%',
        marginBottom: hp(2),
        backgroundColor: 'pink'
    },
    rowStarContainer: {
        width: wp(58),
        marginTop: hp(1),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'yellow',
    },
    starTitle: {
        fontSize: RFValue(12),
        fontWeight: '500',
    },
    applyBtn: {
        paddingVertical: hp(2),
        borderRadius: hp(1),
    },
});
