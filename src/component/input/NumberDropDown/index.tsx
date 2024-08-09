import {
  ImageSourcePropType,
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
import React, { useRef, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { styles } from "./styles";
import { Animated } from "react-native";
import { ColorSheet } from "@/utilis/ColorSheet";
import Entypo from "react-native-vector-icons/Entypo";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

interface NumberInputDropDownProps {
  data: { label: string; value: string; image: string }[]; // Adjust the type definition here
//   source: ImageSourcePropType;
  value: string;
  onChange: (item: { label: string; value: string }) => void;
  placeholder?: string;
  style?: any | string;
  containerStyle?: any | string;
  ErrorStyle?: StyleProp<ViewStyle>;
  iconColor?: string | undefined;
  selectedTextStyle?: StyleProp<TextStyle>;
  textItemStyle?: any;
  dropdownPosition?: "auto" | "bottom" | "top" | undefined;
  placeholderStyle?: StyleProp<TextStyle>;
  disable?: boolean | undefined;
  testID?: string | undefined;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  keyboardType?: KeyboardTypeOptions | undefined;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  customRightIcon?: () => JSX.Element;
  valueNumber: string;
  onChangeNumber: (value: string) => void;
  textError?: string;
}
const NumberInputDropDown = (props: NumberInputDropDownProps) => {
  const {
    data,
    // source,
    value,
    onChange,
    placeholder,
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
    keyboardType,
    onBlur,
    customRightIcon,
    valueNumber,
    onChangeNumber,
    textError,
  } = props;

  const [focus, setFocus] = useState(false);
  const [valueItem, setValueItem] = useState<
    { 
      label: string; value: string 
    } | null
  >(null);
  const animationController = useRef(new Animated.Value(0)).current;
  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });
  const toggleAnimate = () => {
    const config = {
      duration: 300,
      toValue: focus ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
  };

  // renderItem
  const renderItem = (item: { label: string; value: string; image: string }) => {
    return (
      <View style={[styles.rowItem, textItemStyle]}>
        <Text style={[styles.textItem, textItemStyle]}>
          {item.label} ({item.value})
        </Text>
        {item.value === valueItem?.value && (
          <Octicons style={styles.icon} color = {ColorSheet.Text2} name="check" size={20} />
        )}
      </View>
    );
  };

  // rightIcon
  const rightIcon = () => {
    return (
      <Animated.View
        style={[
          styles.downIcon,
          {
            transform: [{ rotate: arrowTransform }],
          },
        ]}
      >
        {customRightIcon?.() ?? (
          <Entypo name="chevron-down" size={20} color={ColorSheet.textDefaultColor} />
        )}
      </Animated.View>
    );
  };

  const onChangeValue = (value: { label: string; value: string }) => {
    setValueItem(value);
    onChange && onChange(value);
  };

  // renderInputSearch
  const renderInputSearch = (onSearch: any) => {
    return (
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
  };

  return (
    <View style={[styles.root]}>
      <View style={[styles.mainInputContainer, style]}>
        <Dropdown
          testID={testID}
          style={[styles.dropdown]}
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
          placeholder={""}
          value={valueItem?.label}
          onChange={onChangeValue}
          renderItem={renderItem}
          dropdownPosition={dropdownPosition}
          disable={disable}
          renderInputSearch={renderInputSearch}
          searchField={"label"}
          containerStyle={[styles.containerStyle, containerStyle]}
          //  minHeight={hp(28)}
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
        {textError && <Text style={[styles.errorText, ErrorStyle]}> {textError} </Text>}
    </View>
  );
};

export default NumberInputDropDown;
