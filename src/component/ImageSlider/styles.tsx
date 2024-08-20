import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ColorSheet } from '@/utilis/ColorSheet';

export const styles = StyleSheet.create({
  root: {
    backgroundColor: ColorSheet.PrimaryButton,
    width: wp(90),
    alignItems: 'center',
    marginTop: hp(2),
    height: hp(28),
    paddingTop: hp(0.8),
    borderRadius: 10,
    overflow: 'hidden', // Ensure overflow is handled for rounded corners
  },
  slide: {
    flex: 1,
  },
  imageStyle: {
    width: wp(100),
    height: hp(30), // Ensure the image height fits the container
    resizeMode: 'cover',
  },
  bottomView: {
    width: '100%',
    height: hp(26),
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: ColorSheet.AnimationBottom,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  bottomTitle: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    color: ColorSheet.White,
  },
  bottomSubtitle: {
    fontSize: RFValue(12),
    marginVertical: hp(1),
    color: ColorSheet.White,
    textAlign: 'center',
  },
  rowDotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(1),
  },
  dots: {
    height: hp(1.5),
    borderRadius: 10,
    marginHorizontal: wp(1),
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
    fontWeight: 'bold',
    color: ColorSheet.White,
    textAlign: 'center',
  },
});
