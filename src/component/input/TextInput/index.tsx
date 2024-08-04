import {
  KeyboardTypeOptions,
  TextInput,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextInputFocusEventData,
  View,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { ColorSheet } from "@/utilis/ColorSheet";
import Feather from 'react-native-vector-icons/Feather';
import { styles } from "./styles";

interface TextInputProps {
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  textInputField?: StyleProp<ViewStyle>;
  ErrorStyle?: StyleProp<ViewStyle>;
  placeholder?: string;
  value?: string;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  keyboardType?: KeyboardTypeOptions | undefined;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  disableEyeIcon?: boolean;
  editable?: boolean;
  textError?: string;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  icon?: JSX.Element;
}

const TextInputField = (props: TextInputProps) => {
  const {
    containerStyle,
    textInputField,
    ErrorStyle,
    placeholder,
    value,
    onFocus,
    keyboardType,
    onBlur,
    onChangeText,
    secureTextEntry,
    disableEyeIcon,
    editable,
    autoCapitalize,
    textError,
  } = props;

  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [secureText, setSecureText] = useState(secureTextEntry);

  return (
    <View style={[styles.root, containerStyle]}>
      <View style={styles.inputContainer}>
        {/* Icon */}
        {/* <View style={styles.iconContainer}>
          <Icon name = "phone" size={24} color="black" />
        </View> */}
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
          editable={editable}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry && !showPassword}
        />
        {secureTextEntry && !disableEyeIcon && (
          <TouchableOpacity
            style={styles.eyeIcon}
            activeOpacity={0.6}
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          >
            <Feather
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              color={ColorSheet.textDefaultColor}
            />  
          </TouchableOpacity>
        )}
      </View>
      {textError && <Text style={[styles.errorText, ErrorStyle]}> {textError} </Text>}
    </View>
  );
};

export default TextInputField;