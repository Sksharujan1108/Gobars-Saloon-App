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
    container: {
        flex: 1
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
        resizeMode: 'contain',
    },
    bottomView: {
        width: "100%",
        height: hp(26),
        paddingHorizontal: wp(5),
        paddingVertical: hp(1),
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: ColorSheet.AnimationBottom,
      },
      bottomTitle: {
        fontSize: RFValue(20),
        fontWeight: "bold",
        color: ColorSheet.White,
      },
      bottomSubtitle: {
        fontSize: RFValue(12),
        marginVertical: hp(1),
        color: "white",
        // textAlign: "center",
      },
      rowDotsContainer: {
        // flex: 1,
        marginTop: hp(1),
        flexDirection: "row",
        justifyContent: "center",
        
      },
      dots: {
        height: hp(1.5),
        borderRadius: 10,
        marginHorizontal: wp(1),
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