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
        alignItems: 'center',
        // backgroundColor: 'green',
    },
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    imageStyle: {
        position: 'absolute',
        width: wp(100),
        height: hp(100),
        marginTop: -hp(6),
        resizeMode: 'contain',
    },
    bottomView: {
        width: "100%",
        height: hp(26),
        paddingHorizontal: wp(5),
        paddingVertical: hp(2),
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: ColorSheet.AnimationBottom,
      },
      bottomTitle: {
        fontSize: RFValue(18),
        fontWeight: "bold",
        color: ColorSheet.White,
      },
      bottomSubtitle: {
        fontSize: RFValue(12),
        marginVertical: hp(1),
        color: "white",
        // textAlign: "center",
      },
      dots: {
        width: wp(8),
        height: hp(2),
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
      getStartedButton: {
        marginTop: hp(2),
        paddingVertical: hp(1.5),
        paddingHorizontal: wp(10),
        borderRadius: 10,
        backgroundColor: ColorSheet.PrimaryButton,
      },
      getStartedButtonText: {
        fontSize: RFValue(15),
        fontWeight: "bold",
        color: ColorSheet.White,
        textAlign: "center",
      },
});
