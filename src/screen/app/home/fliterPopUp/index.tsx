import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useMemo } from "react";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdropProps,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import AntDesign from "@expo/vector-icons/AntDesign";
import FeaturedIcon from "@/assets/svg/home/FeaturedIcon.svg";
import CloseSquare from "@/assets/svg/home/CloseSquare.svg";
import PrimaryButton from "@/component/button/PrimaryButton";
import { styles } from "./styles";
import { Constants } from "./constants";

interface HomeFilterPopUpProps {
  bottomSheetModalRef: React.RefObject<BottomSheetModal>;
}

const HomeFilterPopUp = (props: HomeFilterPopUpProps) => {
  const { bottomSheetModalRef } = props;

  // variables
  const snapPoint = useMemo(
    () => [Platform.OS == "android" ? "50%" : "70%"],
    []
  );

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        style={styles.bottomSheetBackdrop}
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior={"close"}
        opacity={0.5}
      />
    ),
    []
  );

  const onPressClose = () => {
    bottomSheetModalRef.current?.dismiss();
  };

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoint}
      backdropComponent={renderBackdrop}
      backgroundStyle={styles.bottomSheetContainer}
      handleComponent={null}
    >
      <BottomSheetView style={styles.contentContainer}>
        {/* Header And Close */}
        <View style={styles.headerContainer}>
          <View style={styles.headerIconContainer}>
            <FeaturedIcon 
              style = {styles.featureIcon}
            />
            <Text style={styles.headerTitle}>{Constants.TITLE}</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={onPressClose}
            // style = {styles.closeIconContainer}
          >
            <CloseSquare />
          </TouchableOpacity>
        </View>

        {/* General Category */}
        <View style={styles.mainContainer}>
          {/* General Category */}
          <View style={styles.commonContainer}>
            <Text style={styles.commonTitle}>{Constants.GENERAL_CATEGORY}</Text>
          </View>
          
          {/* Rating Barber */}
          <View style={styles.commonContainer}>
            <Text style={styles.commonTitle}>{Constants.RATING_BAR_BER}</Text>
            {/* points Star */}
            <View style={styles.rowStarContainer}>
                <AntDesign name="staro" size={28} color="black" />
                <AntDesign name="staro" size={28} color="black" />
                <AntDesign name="staro" size={28} color="black" />
                <AntDesign name="staro" size={28} color="black" />
                <AntDesign name="staro" size={28} color="black" />
                <Text style={styles.starTitle}>({0.4})</Text>
            </View> 
          </View>
          {/* Distance */}
          <Text style={styles.commonTitle}>{Constants.DISTANCE}</Text>

          {/* Apply */}
          <PrimaryButton
            style = {styles.applyBtn}
            title = {Constants.APPLY}
            onPress={() => {
                console.log('Apply');
                
            }}
          />
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default HomeFilterPopUp;
