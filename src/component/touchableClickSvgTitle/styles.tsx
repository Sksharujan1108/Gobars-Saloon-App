import { StyleSheet, Platform } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";
import { ColorSheet } from "@/utilis/ColorSheet";

export const styles = StyleSheet.create({
    container: {
        width: wp(20),
        height: hp(8),
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    title_style: {
        fontSize: RFValue(12),
        fontWeight: '400',
        color: ColorSheet.Text2,
        marginTop: hp(1),
    }
,});
