import { ColorSheet } from "@/utilis/ColorSheet";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'pink'
    },
    scrollView: {
      flexGrow: 1,
    },
    main_container: {
      width: '100%',
      height: '50%',
      padding: hp(2),
      backgroundColor: 'green'
    },
    choose_date_text: {},
});
