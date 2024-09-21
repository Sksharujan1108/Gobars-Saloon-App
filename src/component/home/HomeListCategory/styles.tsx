import { ColorSheet } from "@/utilis/ColorSheet";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  list_container: {
    width: wp(20),
    height: hp(10),
    marginHorizontal: wp(2),
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  active_container: {

  },
  image_container: {
    width: wp(14),
    height: wp(14),
    borderRadius: wp(14) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ColorSheet.PrimaryBackground,
  },
  title_text: {
    fontSize: RFValue(13),
    fontWeight: '500',
    color: ColorSheet.Secondary,
    marginTop: 8,
    textAlign: 'center'
  },
});
