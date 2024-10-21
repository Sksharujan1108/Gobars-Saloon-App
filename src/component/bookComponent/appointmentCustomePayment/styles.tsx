import { ColorSheet } from "@/utilis/ColorSheet";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: hp(3),
    marginBottom: hp(2),
  },
  payment_header_text: {
    marginBottom: hp(2),
    fontSize: Platform.OS == "android" ? RFValue(18) : RFValue(14),
    color: ColorSheet.Secondary,
    fontWeight: "600",
  },
  row_container: {
    marginBottom: hp(2),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  service_text: {
    fontSize: Platform.OS == "android" ? RFValue(16) : RFValue(13),
    color: ColorSheet.Secondary,
    fontWeight: "500",
  },
  price_text: {
    fontSize: Platform.OS == "android" ? RFValue(16) : RFValue(13),
    color: ColorSheet.Secondary,
    fontWeight: "700",
  },
  dashed_horizontal_line: {
    marginTop: hp(1),
    marginBottom: hp(2),
    alignSelf: "center",
  },
  total_service_title: {
    fontSize: Platform.OS == "android" ? RFValue(16) : RFValue(13),
    color: ColorSheet.Secondary,
    fontWeight: "500",
  },
  total_service_price: {
    fontSize: Platform.OS == "android" ? RFValue(16) : RFValue(13),
    color: ColorSheet.Secondary,
    fontWeight: "700",
  },
});
