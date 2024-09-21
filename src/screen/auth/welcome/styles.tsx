import { ColorSheet } from "@/utilis/ColorSheet";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
      },
      imgBackgroundContainer: {
        width: wp(100),
        height: '60%', // Adjust the image height
        alignItems: 'center',
        position: 'relative',
      },
      imgBackground: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },
      gradient: {
        position: 'absolute',
        width: '100%',
        height: '100%',
      },
      headingContainer: {
        width: wp(90),
        position: 'absolute',
        bottom: Platform.OS == 'ios' ? 5 : 0,
        // backgroundColor: 'red'
      },
      heading_text: {
        fontSize: Platform.OS == 'ios' ? RFValue(28) : RFValue(32),
        fontWeight: '700',
        textAlign: 'center',
        color: ColorSheet.White,
        // marginTop: ,
      },
      subTitle_container: {
        width: wp(80),
        marginTop: hp(2),
        // backgroundColor: 'red'
      },
      subTitle: {
        fontSize: Platform.OS == 'ios' ? RFValue(12) : RFValue(14),
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: hp(3.5),
        color: ColorSheet.subTitle,
      },
      buttonContainer: {
        width: wp(100),
        marginTop: Platform.OS == 'ios' ? hp(2) : hp(4),
        padding: hp(3),
      },
      getStart_button: {
        paddingVertical: hp(2),
        borderRadius: hp(1),
        backgroundColor: ColorSheet.White,
      },
      get_start_text: {
        fontSize: Platform.OS == 'ios' ? RFValue(16) : RFValue(18),
        fontWeight: '700',
        textAlign: 'center',
        color: ColorSheet.Secondary,
      },
      login_button: {
        marginTop: hp(3),
        paddingVertical: hp(2),
        borderWidth: 1,
        borderColor: ColorSheet.BorderColor,
        borderRadius: hp(1),
        backgroundColor: ColorSheet.Secondary,
      },
      login_text: {
        fontSize: Platform.OS == 'ios' ? RFValue(16) : RFValue(18),
        fontWeight: '700',
        textAlign: 'center',
        color: ColorSheet.White,
      },
});
