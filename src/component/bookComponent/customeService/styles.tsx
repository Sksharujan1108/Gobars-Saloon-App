import { ColorSheet } from "@/utilis/ColorSheet";
import { Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  header_container: {
    paddingVertical: hp(1), // Adds padding to the header
    backgroundColor: "white", // You can change the background color as needed
  },
  header_text: {
    fontSize: RFValue(16),
    fontWeight: "600",
    color: ColorSheet.Secondary,
    marginBottom: hp(1),
  },
  list_container: {
    flexGrow: 1,
    // flexDirection: "column", // Ensure the list items are aligned horizontally
    marginTop: hp(1),
  },

  data_row_container: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: 'pink'
  },
  list_item: {
    width: hp(14),
    justifyContent: 'center',
    alignItems: "center",
    // backgroundColor: "red",
  },
  image_container: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(7.5),
    overflow: "hidden",
    position: 'relative',
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  checkmark_blur_container: {
    position: 'absolute',
    top: hp(0),
    right: hp(0),
    width: wp(15),
    height: wp(15),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: ColorSheet.Primary,
    borderRadius: hp(2),
  },
  title_text: {
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(12),
    fontWeight: "500",
    color: ColorSheet.Secondary,
    marginTop: hp(1),
  },
  price_text: {
    marginTop: hp(0.5),
    fontSize: Platform.OS == 'android' ? RFValue(14) : RFValue(12),
    fontWeight: "500",
    color: ColorSheet.Text2,
  },
});
