import React, { useRef, useState } from "react";
import {
  Animated,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { ColorSheet } from "@/utilis/ColorSheet";
import { styles } from "./styles"; // Ensure this path is correct

interface NumberInputDropDownProps {
  data: { label: string; value: string; image: string }[];
  value: string;
  onChange: (item: { label: string; value: string }) => void;
  placeholder?: string;
  placeholderNumber?: string;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  ErrorStyle?: StyleProp<ViewStyle>;
  iconColor?: string;
  selectedTextStyle?: StyleProp<TextStyle>;
  textItemStyle?: StyleProp<TextStyle>;
  dropdownPosition?: "auto" | "bottom" | "top";
  placeholderStyle?: StyleProp<TextStyle>;
  disable?: boolean;
  testID?: string;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  keyboardType?: KeyboardTypeOptions;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  customRightIcon?: () => JSX.Element;
  valueNumber: string;
  onChangeNumber: (value: string) => void;
  textError?: string;
}

const NumberInputDropDown: React.FC<NumberInputDropDownProps> = ({
  data,
  value,
  onChange,
  placeholder,
  placeholderNumber,
  style,
  containerStyle,
  ErrorStyle,
  iconColor,
  selectedTextStyle,
  textItemStyle,
  dropdownPosition,
  placeholderStyle,
  disable,
  testID,
  onFocus,
  onBlur,
  customRightIcon,
  valueNumber,
  onChangeNumber,
  textError,
}) => {
  const [focus, setFocus] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;
  const [valueItem, setValueItem] = useState(value);
  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const toggleAnimate = () => {
    Animated.timing(animationController, {
      duration: 300,
      toValue: focus ? 0 : 1,
      useNativeDriver: true,
    }).start();
  };

  const renderItem = (item: { label: string; value: string }) => (
    <View style={[styles.rowItem, textItemStyle]}>
      <Text style={[styles.textItem, textItemStyle]}>
        {item.label} ({item.value})
      </Text>
      {item.value === valueItem && (
        <Octicons style={styles.icon} color={ColorSheet.Text2} name="check" size={20} />
      )}
    </View>
  );

  const rightIcon = () => (
    <Animated.View
      style={[
        styles.downIcon,
        {
          transform: [{ rotate: arrowTransform }],
        },
      ]}
    >
      {customRightIcon?.() ?? (
        <Entypo name="chevron-down" size={20} color={iconColor ?? ColorSheet.textDefaultColor} />
      )}
    </Animated.View>
  );

  const renderInputSearch = (onSearch: (text: string) => void) => (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={wp(5)} color={ColorSheet.textDefaultColor} />
      <TextInput
        style={styles.searchInput}
        placeholderTextColor={ColorSheet.Text2}
        placeholder="Search..."
        onChangeText={onSearch}
      />
    </View>
  );

  const onChangeValue = (value: any) => {
    setValueItem(value)
    onChange && onChange(value)
  }

  return (
    <View style={[styles.root]}>
      <View style={[styles.mainInputContainer, style]}>
        <Dropdown
          testID={testID}
          style={[styles.dropdown, containerStyle]}
          placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
          selectedTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
          iconStyle={styles.iconStyle}
          iconColor={iconColor}
          renderRightIcon={rightIcon}
          data={data}
          search
          maxHeight={300}
          onFocus={() => {
            setFocus(true);
            toggleAnimate();
          }}
          onBlur={() => {
            setFocus(false);
            toggleAnimate();
          }}
          labelField="value"
          valueField="label"
          placeholder=''
          value={valueItem}
          onChange={onChangeValue}
          renderItem={renderItem}
          dropdownPosition={dropdownPosition}
          disable={disable}
          renderInputSearch={renderInputSearch}
          searchField="label"
          containerStyle={[styles.containerStyle, containerStyle]}
        />

        <TextInput
          style={styles.textInput}
          placeholderTextColor={ColorSheet.Text2}
          placeholder={placeholder}
          keyboardType='number-pad'
          value={valueNumber}
          onChangeText={onChangeNumber}
          onFocus={(e) => {
            setFocus(true);
            onFocus?.(e);
          }}
          onBlur={onBlur}
        />
      </View>
      {textError && <Text style={[styles.errorText, ErrorStyle]}>{textError}</Text>}
    </View>
  );
};

export default NumberInputDropDown;
