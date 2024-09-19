import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { Constants } from "./constants";
import TextInputField from "@/component/input/TextInput";
import TextButton from "@/component/button/Text_Button";
import PrimaryButton from "@/component/button/PrimaryButton";
import { ColorSheet } from "@/utilis/ColorSheet";
import { AuthStackScreenProps } from "@/navigation/navigation_Models/auth_Models/authModels";
import { isPassword, isString } from "@/utilis/validations";
import { ErrorFlash } from "@/utilis/flashMessage";
import { LinearGradient } from "expo-linear-gradient";

const LogIn = ({ navigation }: AuthStackScreenProps<"LogInScreen">) => {
  const [form, setForm] = useState({
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
  });

  const handleLogIn = () => {
    if (isString(form.email)) {
      ErrorFlash(Constants.VALID_EMAIL);
    } else if (form.email === "") {
      ErrorFlash(Constants.EMAIL_REQUIRED);
    } else if (isPassword(form.password)) {
      ErrorFlash(Constants.VALID_PASS);
    } else if (form.password === "") {
      ErrorFlash(Constants.PASSWORD_REQUIRED);
    } else {
      navigation.navigate("AppBottomTopScreen");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      {/* StatusBar */}
      <StatusBar
        barStyle="light-content"
        backgroundColor={"transparent"}
        translucent={true}
      />

      <LinearGradient
        colors={["#888888", "#ffffff", "#888888"]} // Dark top-left, light center, dark bottom-right
        style={styles.container}
        start={{ x: 0.1, y: 0 }} // Adjusting top-left starting point
        end={{ x: 0.5, y: 1 }} // Adjusting bottom-right ending point
        locations={[0, 0.5, 1]} // Gradient stops to emphasize the center lightness
      >
        <View style={styles.main_container}>
          {/* Heading Title */}
          <Text style={styles.heading_title}> {Constants.TITLE} </Text>
          {/* SubTitle */}
          <Text style={styles.sub_title}> {Constants.SUB_TITLE} </Text>

          {/* input field Container */}
          <View style={styles.input_field_container}>
            {/* Email Input Field */}
          <Text style={styles.inputTitle}> {"UserName"} </Text>
          <TextInputField
            placeholder={Constants.EMAIL_PLACEHOLDER}
            value={form.email}
            onChangeText={(text) => setForm({ ...form, email: text })}
            textError={form.emailError}
            onFocus={() => setForm({ ...form, emailError: "" })}
            onBlur={() => {
              if (form.email === "") {
                setForm({ ...form, emailError: Constants.EMAIL_REQUIRED });
              } else {
                setForm({ ...form, emailError: "" });
              }
            }}
          />

          {/* Password Input Field */}
          <Text style={styles.inputTitle}> {"Password"} </Text>
          <TextInputField
            placeholder={Constants.PASSWORD_PLACEHOLDER}
            value={form.password}
            onChangeText={(text) => setForm({ ...form, password: text })}
            textError={form.passwordError}
            secureTextEntry
            onFocus={() => setForm({ ...form, passwordError: "" })}
            onBlur={() => {
              if (form.password === "") {
                setForm({
                  ...form,
                  passwordError: Constants.PASSWORD_REQUIRED,
                });
              } else {
                setForm({ ...form, passwordError: "" });
              }
            }}
          />

          {/* ForgotPassword */}
          <TextButton
            style={styles.forgotStyle}
            title={Constants.FORGOT_PASSWORD_TITLE}
            onPress={() => {
              navigation.navigate("ForgotPasswordScreen");
            }}
          />

          {/* Button */}
          <PrimaryButton
            style={styles.buttonContainer}
            title={Constants.LOGIN_BUTTON_TITLE}
            onPress={handleLogIn}
          />

          {/* Don't have an account? Register */}
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>
              {" "}
              {Constants.REGISTER_TITLE}{" "}
            </Text>
            <TextButton
              textStyle={{
                textDecorationLine: "underline",
              }}
              title={Constants.REGISTER_BUTTON_TITLE}
              onPress={() => {
                navigation.navigate("RegisterScreen");
              }}
            />
          </View>
          </View>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default LogIn;
