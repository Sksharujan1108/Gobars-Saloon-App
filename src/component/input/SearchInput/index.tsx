import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ColorSheet } from "@/utilis/ColorSheet";
import { styles } from "./styles";

interface SearchInputProps {
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  value?: string | undefined;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  keyboardType?: KeyboardTypeOptions | undefined;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onChangeText?: (text: string) => void;
  onPressClose?: () => void;
}
const SearchInput = (props: SearchInputProps) => {
  const {
    placeholder,
    value,
    onFocus,
    keyboardType,
    onBlur,
    onChangeText,
    onPressClose,
  } = props;

  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.container}>
      {/* Search Icon */}
      <AntDesign name="search1" size={24} color={ColorSheet.PrimaryButton} />
      {/* Input */}
      <TextInput
        style={styles.textInput}
        placeholderTextColor={ColorSheet.textDefaultColor}
        onChangeText={onChangeText}
        value={value}
        onFocus={(e) => {
          setFocused(true);
          onFocus?.(e);
        }}
        onEndEditing={(e) => {
          setFocused(false);
        }}
        onBlur={onBlur}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
      {/* CloseIcon */}
      {value?.length > 0 && (
        <TouchableOpacity
          style={styles.icon}
          activeOpacity={0.6}
          onPress={onPressClose}
        >
          <AntDesign
            name="closecircle"
            size={22}
            color={ColorSheet.PrimaryButton}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchInput;
